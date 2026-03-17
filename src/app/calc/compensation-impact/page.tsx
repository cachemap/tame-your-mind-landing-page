"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import styles from "./page.module.scss";

interface Scenario {
  label: string;
  salary: number;
  taxPct: number;
  expensePct: number;
  investPct: number;
  donationPct: number;
  raiseInterval: number;
  raisePct: number;
  annualIncrease: number;
}

interface YearData {
  year: number;
  entryNetWorth: number;
  seniorNetWorth: number;
  entrySalary: number;
  seniorSalary: number;
}

const DEFAULT_ENTRY: Scenario = {
  label: "Entry Level",
  salary: 75000,
  taxPct: 22,
  expensePct: 50,
  investPct: 40,
  donationPct: 10,
  raiseInterval: 5,
  raisePct: 20,
  annualIncrease: 3,
};

const DEFAULT_SENIOR: Scenario = {
  label: "Senior Level",
  salary: 165000,
  taxPct: 30,
  expensePct: 50,
  investPct: 40,
  donationPct: 10,
  raiseInterval: 2,
  raisePct: 20,
  annualIncrease: 3,
};

function computeProjection(
  scenario: Scenario,
  years: number,
  returnRate: number,
): { netWorth: number; salary: number }[] {
  const results: { netWorth: number; salary: number }[] = [];
  let portfolio = 0;
  let salary = scenario.salary;

  for (let year = 1; year <= years; year++) {
    // Apply raise logic at the start of each year (after year 1)
    if (year > 1) {
      if ((year - 1) % scenario.raiseInterval === 0) {
        salary *= 1 + scenario.raisePct / 100;
      } else {
        salary *= 1 + scenario.annualIncrease / 100;
      }
    }

    // After-tax income, then apply allocation percentages
    const afterTax = salary * (1 - scenario.taxPct / 100);
    const invested = afterTax * (scenario.investPct / 100);
    portfolio = (portfolio + invested) * (1 + returnRate / 100);

    results.push({
      netWorth: Math.round(portfolio),
      salary: Math.round(salary),
    });
  }

  return results;
}

function afterTax(salary: number, taxPct: number): number {
  return salary * (1 - taxPct / 100);
}

function formatCurrency(value: number): string {
  if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(1)}M`;
  }
  if (value >= 1_000) {
    return `$${(value / 1_000).toFixed(0)}K`;
  }
  return `$${value.toLocaleString()}`;
}

function formatCurrencyFull(value: number): string {
  return `$${value.toLocaleString()}`;
}

function formatPct(value: number): string {
  return `${value}%`;
}

const INPUT_ROWS: {
  key: keyof Omit<Scenario, "label">;
  label: string;
  format: "currency" | "pct" | "number";
  step: number;
}[] = [
  { key: "salary", label: "Starting Salary", format: "currency", step: 5000 },
  { key: "taxPct", label: "Est. Tax Rate", format: "pct", step: 1 },
  { key: "expensePct", label: "Expenses", format: "pct", step: 1 },
  { key: "investPct", label: "Investing", format: "pct", step: 1 },
  { key: "donationPct", label: "Donations", format: "pct", step: 1 },
  {
    key: "raiseInterval",
    label: "Raise Every (years)",
    format: "number",
    step: 1,
  },
  { key: "raisePct", label: "Raise Amount", format: "pct", step: 1 },
  { key: "annualIncrease", label: "Annual Increase", format: "pct", step: 1 },
];

export default function CalculatorPage() {
  const [entry, setEntry] = useState<Scenario>(DEFAULT_ENTRY);
  const [senior, setSenior] = useState<Scenario>(DEFAULT_SENIOR);
  const [returnRate, setReturnRate] = useState(7);
  const [years, setYears] = useState(20);

  const updateEntry = useCallback(
    (key: keyof Omit<Scenario, "label">, value: number) => {
      setEntry((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const updateSenior = useCallback(
    (key: keyof Omit<Scenario, "label">, value: number) => {
      setSenior((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const { chartData, entryProjection, seniorProjection } = useMemo(() => {
    const ep = computeProjection(entry, years, returnRate);
    const sp = computeProjection(senior, years, returnRate);
    const cd: YearData[] = ep.map((e, i) => ({
      year: i + 1,
      entryNetWorth: e.netWorth,
      seniorNetWorth: sp[i].netWorth,
      entrySalary: e.salary,
      seniorSalary: sp[i].salary,
    }));
    return { chartData: cd, entryProjection: ep, seniorProjection: sp };
  }, [entry, senior, returnRate, years]);

  const milestones = [10, 20, 30].filter((y) => y <= years);

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Compensation Impact Calculator</h1>
          <p className={styles.subtitle}>
            See how the gap between entry-level and senior-level compensation
            compounds over time — with realistic raises and investment growth.
          </p>
          <p className={styles.disclaimer}>
            🧮 Heads up — this is a napkin-math tool for illustrative purposes
            only. It uses simplified tax estimates and doesn't account for
            inflation, capital gains taxes, market volatility, job changes, or
            the cost of that coffee habit. For real financial planning, talk to
            an actual financial advisor.
          </p>
        </div>
      </section>

      <section className={styles.calculator}>
        <div className={styles.container}>
          {/* Global Controls */}
          <div className={styles.globalControls}>
            <div className={styles.globalInput}>
              <label htmlFor="returnRate">Annual Return Rate</label>
              <div className={styles.inputWrapper}>
                <input
                  id="returnRate"
                  type="number"
                  value={returnRate}
                  onChange={(e) => setReturnRate(Number(e.target.value))}
                  min={0}
                  max={30}
                  step={0.5}
                />
                <span className={styles.inputSuffix}>%</span>
              </div>
            </div>
            <div className={styles.globalInput}>
              <label htmlFor="years">Projection Years</label>
              <div className={styles.inputWrapper}>
                <input
                  id="years"
                  type="number"
                  value={years}
                  onChange={(e) =>
                    setYears(Math.min(50, Math.max(1, Number(e.target.value))))
                  }
                  min={1}
                  max={50}
                  step={1}
                />
                <span className={styles.inputSuffix}>yrs</span>
              </div>
            </div>
          </div>

          {/* Spreadsheet */}
          <div className={styles.spreadsheet}>
            {/* Desktop: table layout */}
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.labelCol}></th>
                  <th className={styles.scenarioCol}>
                    <span
                      className={styles.scenarioDot}
                      data-scenario="entry"
                    />
                    Entry Level
                  </th>
                  <th className={styles.scenarioCol}>
                    <span
                      className={styles.scenarioDot}
                      data-scenario="senior"
                    />
                    Senior Level
                  </th>
                </tr>
              </thead>
              <tbody>
                {INPUT_ROWS.map((row) => (
                  <tr key={row.key}>
                    <td className={styles.labelCell}>{row.label}</td>
                    <td className={styles.inputCell}>
                      <ScenarioInput
                        value={entry[row.key] as number}
                        onChange={(v) => updateEntry(row.key, v)}
                        format={row.format}
                        step={row.step}
                      />
                    </td>
                    <td className={styles.inputCell}>
                      <ScenarioInput
                        value={senior[row.key] as number}
                        onChange={(v) => updateSenior(row.key, v)}
                        format={row.format}
                        step={row.step}
                      />
                    </td>
                  </tr>
                ))}

                <tr className={styles.dividerRow}>
                  <td colSpan={3}></td>
                </tr>

                <tr className={styles.computedRow}>
                  <td className={styles.labelCell}>Est. Taxes</td>
                  <td className={styles.computedCell}>
                    {formatCurrencyFull(
                      Math.round((entry.salary * entry.taxPct) / 100),
                    )}
                  </td>
                  <td className={styles.computedCell}>
                    {formatCurrencyFull(
                      Math.round((senior.salary * senior.taxPct) / 100),
                    )}
                  </td>
                </tr>
                <tr className={styles.computedRow}>
                  <td className={styles.labelCell}>After-Tax Income</td>
                  <td className={styles.computedCell}>
                    {formatCurrencyFull(
                      Math.round(afterTax(entry.salary, entry.taxPct)),
                    )}
                  </td>
                  <td className={styles.computedCell}>
                    {formatCurrencyFull(
                      Math.round(afterTax(senior.salary, senior.taxPct)),
                    )}
                  </td>
                </tr>
                <tr className={styles.computedRow}>
                  <td className={styles.labelCell}>Annual Expenses</td>
                  <td className={styles.computedCell}>
                    {formatCurrencyFull(
                      Math.round(
                        (afterTax(entry.salary, entry.taxPct) *
                          entry.expensePct) /
                          100,
                      ),
                    )}
                  </td>
                  <td className={styles.computedCell}>
                    {formatCurrencyFull(
                      Math.round(
                        (afterTax(senior.salary, senior.taxPct) *
                          senior.expensePct) /
                          100,
                      ),
                    )}
                  </td>
                </tr>
                <tr className={styles.computedRow}>
                  <td className={styles.labelCell}>Annual Invested</td>
                  <td className={styles.computedCell}>
                    {formatCurrencyFull(
                      Math.round(
                        (afterTax(entry.salary, entry.taxPct) *
                          entry.investPct) /
                          100,
                      ),
                    )}
                  </td>
                  <td className={styles.computedCell}>
                    {formatCurrencyFull(
                      Math.round(
                        (afterTax(senior.salary, senior.taxPct) *
                          senior.investPct) /
                          100,
                      ),
                    )}
                  </td>
                </tr>
                <tr className={styles.computedRow}>
                  <td className={styles.labelCell}>Annual Donated</td>
                  <td className={styles.computedCell}>
                    {formatCurrencyFull(
                      Math.round(
                        (afterTax(entry.salary, entry.taxPct) *
                          entry.donationPct) /
                          100,
                      ),
                    )}
                  </td>
                  <td className={styles.computedCell}>
                    {formatCurrencyFull(
                      Math.round(
                        (afterTax(senior.salary, senior.taxPct) *
                          senior.donationPct) /
                          100,
                      ),
                    )}
                  </td>
                </tr>

                <tr className={styles.dividerRow}>
                  <td colSpan={3}></td>
                </tr>

                {milestones.map((m) => (
                  <tr key={m} className={styles.milestoneRow}>
                    <td className={styles.labelCell}>Net Worth @ {m}yr</td>
                    <td className={styles.milestoneCell}>
                      {entryProjection[m - 1]
                        ? formatCurrencyFull(entryProjection[m - 1].netWorth)
                        : "—"}
                    </td>
                    <td className={styles.milestoneCell}>
                      {seniorProjection[m - 1]
                        ? formatCurrencyFull(seniorProjection[m - 1].netWorth)
                        : "—"}
                    </td>
                  </tr>
                ))}

                {years > 0 && !milestones.includes(years) && (
                  <tr className={styles.milestoneRow}>
                    <td className={styles.labelCell}>Net Worth @ {years}yr</td>
                    <td className={styles.milestoneCell}>
                      {entryProjection[years - 1]
                        ? formatCurrencyFull(
                            entryProjection[years - 1].netWorth,
                          )
                        : "—"}
                    </td>
                    <td className={styles.milestoneCell}>
                      {seniorProjection[years - 1]
                        ? formatCurrencyFull(
                            seniorProjection[years - 1].netWorth,
                          )
                        : "—"}
                    </td>
                  </tr>
                )}

                {years >= 10 && (
                  <tr className={styles.differenceRow}>
                    <td className={styles.labelCell}>Lifetime Difference</td>
                    <td colSpan={2} className={styles.differenceCell}>
                      {formatCurrencyFull(
                        (seniorProjection[years - 1]?.netWorth ?? 0) -
                          (entryProjection[years - 1]?.netWorth ?? 0),
                      )}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* Mobile: card layout */}
            <div className={styles.mobileCards}>
              {[
                {
                  scenario: entry,
                  projection: entryProjection,
                  variant: "entry" as const,
                },
                {
                  scenario: senior,
                  projection: seniorProjection,
                  variant: "senior" as const,
                },
              ].map(({ scenario, projection, variant }) => (
                <div
                  key={variant}
                  className={styles.mobileCard}
                  data-scenario={variant}
                >
                  <h3 className={styles.mobileCardTitle}>
                    <span
                      className={styles.scenarioDot}
                      data-scenario={variant}
                    />
                    {scenario.label}
                  </h3>

                  {INPUT_ROWS.map((row) => (
                    <div key={row.key} className={styles.mobileRow}>
                      <label>{row.label}</label>
                      <ScenarioInput
                        value={scenario[row.key] as number}
                        onChange={(v) =>
                          variant === "entry"
                            ? updateEntry(row.key, v)
                            : updateSenior(row.key, v)
                        }
                        format={row.format}
                        step={row.step}
                      />
                    </div>
                  ))}

                  <div className={styles.mobileComputed}>
                    <div className={styles.mobileComputedRow}>
                      <span>Est. Taxes</span>
                      <span>
                        {formatCurrencyFull(
                          Math.round((scenario.salary * scenario.taxPct) / 100),
                        )}
                      </span>
                    </div>
                    <div className={styles.mobileComputedRow}>
                      <span>After-Tax Income</span>
                      <span>
                        {formatCurrencyFull(
                          Math.round(
                            afterTax(scenario.salary, scenario.taxPct),
                          ),
                        )}
                      </span>
                    </div>
                    <div className={styles.mobileComputedRow}>
                      <span>Annual Expenses</span>
                      <span>
                        {formatCurrencyFull(
                          Math.round(
                            (afterTax(scenario.salary, scenario.taxPct) *
                              scenario.expensePct) /
                              100,
                          ),
                        )}
                      </span>
                    </div>
                    <div className={styles.mobileComputedRow}>
                      <span>Annual Invested</span>
                      <span>
                        {formatCurrencyFull(
                          Math.round(
                            (afterTax(scenario.salary, scenario.taxPct) *
                              scenario.investPct) /
                              100,
                          ),
                        )}
                      </span>
                    </div>
                    <div className={styles.mobileComputedRow}>
                      <span>Annual Donated</span>
                      <span>
                        {formatCurrencyFull(
                          Math.round(
                            (afterTax(scenario.salary, scenario.taxPct) *
                              scenario.donationPct) /
                              100,
                          ),
                        )}
                      </span>
                    </div>
                  </div>

                  <div className={styles.mobileMilestones}>
                    {milestones.map((m) => (
                      <div key={m} className={styles.mobileMilestoneRow}>
                        <span>Net Worth @ {m}yr</span>
                        <span className={styles.milestoneValue}>
                          {projection[m - 1]
                            ? formatCurrencyFull(projection[m - 1].netWorth)
                            : "—"}
                        </span>
                      </div>
                    ))}
                    {years > 0 && !milestones.includes(years) && (
                      <div className={styles.mobileMilestoneRow}>
                        <span>Net Worth @ {years}yr</span>
                        <span className={styles.milestoneValue}>
                          {projection[years - 1]
                            ? formatCurrencyFull(projection[years - 1].netWorth)
                            : "—"}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {years >= 10 && (
                <div className={styles.mobileDifference}>
                  <span>Lifetime Difference</span>
                  <span className={styles.differenceValue}>
                    {formatCurrencyFull(
                      (seniorProjection[years - 1]?.netWorth ?? 0) -
                        (entryProjection[years - 1]?.netWorth ?? 0),
                    )}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className={styles.scrollToGraphs}>
            <a
              href="#graphs"
              className={styles.scrollToGraphsLink}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("graphs")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              ↓ Check out the graphs below ↓
            </a>
          </div>

          {/* Chart */}
          <div id="graphs" className={styles.chartSection}>
            <h2 className={styles.chartTitle}>Projected Net Worth Over Time</h2>
            <div className={styles.chartWrapper}>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart
                  data={chartData}
                  margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(255,255,255,0.08)"
                  />
                  <XAxis
                    dataKey="year"
                    label={{
                      value: "Year",
                      position: "insideBottomRight",
                      offset: -5,
                      fill: "rgba(255,255,255,0.5)",
                    }}
                    tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }}
                    stroke="rgba(255,255,255,0.15)"
                  />
                  <YAxis
                    tickFormatter={formatCurrency}
                    tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }}
                    stroke="rgba(255,255,255,0.15)"
                    width={65}
                  />
                  <Tooltip
                    formatter={(value, name) => [
                      formatCurrencyFull(Number(value)),
                      name === "entryNetWorth" ? "Entry Level" : "Senior Level",
                    ]}
                    labelFormatter={(label) => `Year ${label}`}
                    contentStyle={{
                      background: "oklch(0.18 0.02 269.18)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: "8px",
                      color: "rgba(255,255,255,0.9)",
                      fontSize: "0.875rem",
                    }}
                  />
                  <Legend
                    formatter={(value: string) =>
                      value === "entryNetWorth" ? "Entry Level" : "Senior Level"
                    }
                    wrapperStyle={{ fontSize: "0.875rem" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="entryNetWorth"
                    stroke="oklch(0.67 0.17 200)"
                    strokeWidth={2.5}
                    dot={false}
                    activeDot={{ r: 5 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="seniorNetWorth"
                    stroke="oklch(0.67 0.17 153.85)"
                    strokeWidth={2.5}
                    dot={false}
                    activeDot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Salary Growth Chart */}
          <div className={styles.chartSection}>
            <h2 className={styles.chartTitle}>Salary Growth Over Time</h2>
            <div className={styles.chartWrapper}>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={chartData}
                  margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(255,255,255,0.08)"
                  />
                  <XAxis
                    dataKey="year"
                    label={{
                      value: "Year",
                      position: "insideBottomRight",
                      offset: -5,
                      fill: "rgba(255,255,255,0.5)",
                    }}
                    tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }}
                    stroke="rgba(255,255,255,0.15)"
                  />
                  <YAxis
                    tickFormatter={formatCurrency}
                    tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }}
                    stroke="rgba(255,255,255,0.15)"
                    width={65}
                  />
                  <Tooltip
                    formatter={(value, name) => [
                      formatCurrencyFull(Number(value)),
                      name === "entrySalary" ? "Entry Level" : "Senior Level",
                    ]}
                    labelFormatter={(label) => `Year ${label}`}
                    contentStyle={{
                      background: "oklch(0.18 0.02 269.18)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: "8px",
                      color: "rgba(255,255,255,0.9)",
                      fontSize: "0.875rem",
                    }}
                  />
                  <Legend
                    formatter={(value: string) =>
                      value === "entrySalary" ? "Entry Level" : "Senior Level"
                    }
                    wrapperStyle={{ fontSize: "0.875rem" }}
                  />
                  <Line
                    type="stepAfter"
                    dataKey="entrySalary"
                    stroke="oklch(0.67 0.17 200)"
                    strokeWidth={2.5}
                    dot={false}
                    activeDot={{ r: 5 }}
                  />
                  <Line
                    type="stepAfter"
                    dataKey="seniorSalary"
                    stroke="oklch(0.67 0.17 153.85)"
                    strokeWidth={2.5}
                    dot={false}
                    activeDot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <h2>Ready to Close the Gap?</h2>
            <p>
              Our 12-week program is designed to accelerate you from entry-level
              thinking to senior-level impact — the kind that earns these
              numbers.
            </p>
            <Link href="/#signup" className={styles.ctaButton}>
              Join the Waitlist →
            </Link>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>
          © {new Date().getFullYear()} cachemap — Built for engineers who refuse
          to plateau.
        </p>
      </footer>
    </main>
  );
}

function ScenarioInput({
  value,
  onChange,
  format,
  step,
}: {
  value: number;
  onChange: (v: number) => void;
  format: "currency" | "pct" | "number";
  step: number;
}) {
  return (
    <div className={styles.scenarioInput}>
      {format === "currency" && <span className={styles.inputPrefix}>$</span>}
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        step={step}
        min={0}
        className={styles.cellInput}
      />
      {format === "pct" && <span className={styles.inputSuffix}>%</span>}
      {format === "number" && <span className={styles.inputSuffix}>yr</span>}
    </div>
  );
}
