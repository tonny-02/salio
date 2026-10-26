"use client";

/**
 * Client mock store – mirrors Salio HTML localStorage model.
 * Replace with RTK Query + NestJS/Supabase for production.
 */

import { useCallback, useEffect, useState } from "react";
import type {
  IncomeEntry,
  SavingsGoal,
  Transaction,
} from "@/types/salio";

const STORAGE_KEY = "salio-user-v1";

export type SalioUserState = {
  name: string;
  email: string;
  income: IncomeEntry[];
  budgetTotal: number;
  alloc: Record<string, number>;
  transactions: Transaction[];
  savings: SavingsGoal[];
};

const defaultState = (): SalioUserState => ({
  name: "Esther Japleting",
  email: "esther@example.com",
  income: [
    {
      id: "i1",
      source: "Part-time job",
      amount: 18000,
      date: new Date().toISOString().slice(0, 10),
    },
  ],
  budgetTotal: 15000,
  alloc: {
    Food: 5000,
    Transport: 2000,
    "School fees": 4000,
    "Airtime/Data": 1000,
    Shopping: 2000,
    Rent: 1000,
  },
  transactions: [
    {
      id: "t1",
      date: new Date().toISOString(),
      details: "Naivas Supermarket",
      counterparty: "Naivas",
      amount: 450,
      type: "out",
      category: "Food",
      source: "manual",
    },
    {
      id: "t2",
      date: new Date().toISOString(),
      details: "Bolt ride",
      counterparty: "Bolt",
      amount: 200,
      type: "out",
      category: "Transport",
      source: "manual",
    },
    {
      id: "t3",
      date: new Date().toISOString(),
      details: "Safaricom airtime",
      counterparty: "Safaricom",
      amount: 100,
      type: "out",
      category: "Airtime/Data",
      source: "manual",
    },
    {
      id: "t4",
      date: new Date().toISOString(),
      details: "School fees instalment",
      counterparty: "University",
      amount: 1200,
      type: "out",
      category: "School fees",
      source: "manual",
    },
  ],
  savings: [
    {
      id: "s1",
      name: "Laptop Fund",
      saved: 12450,
      target: 50000,
      targetDate: "2025-08-20",
      monthlyTarget: 3000,
      status: "active",
    },
    {
      id: "s2",
      name: "Emergency Fund",
      saved: 8500,
      target: 30000,
      targetDate: "2025-12-31",
      monthlyTarget: 2000,
      status: "active",
    },
  ],
});

function load(): SalioUserState {
  if (typeof window === "undefined") return defaultState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...defaultState(), ...JSON.parse(raw) };
  } catch {
    /* ignore */
  }
  return defaultState();
}

function persist(state: SalioUserState) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function useSalioStore() {
  const [state, setState] = useState<SalioUserState>(defaultState);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setState(load());
    setReady(true);
  }, []);

  const update = useCallback((patch: Partial<SalioUserState>) => {
    setState((prev) => {
      const next = { ...prev, ...patch };
      persist(next);
      return next;
    });
  }, []);

  const totalIncome = state.income.reduce((s, i) => s + i.amount, 0);
  const activeTx = state.transactions.filter((t) => !t.excluded);
  const totalSpending = activeTx
    .filter((t) => t.type === "out")
    .reduce((s, t) => s + t.amount, 0);
  const availableBalance = totalIncome - totalSpending;

  const spendingByCategory = activeTx
    .filter((t) => t.type === "out")
    .reduce<Record<string, number>>((acc, t) => {
      const c = t.category || "Other";
      acc[c] = (acc[c] || 0) + t.amount;
      return acc;
    }, {});

  const addExpense = (tx: Omit<Transaction, "id" | "source" | "type">) => {
    const entry: Transaction = {
      ...tx,
      id: "t" + Date.now(),
      type: "out",
      source: "manual",
    };
    update({ transactions: [entry, ...state.transactions] });
  };

  const addIncome = (entry: Omit<IncomeEntry, "id">) => {
    update({
      income: [{ ...entry, id: "i" + Date.now() }, ...state.income],
    });
  };

  const addContribution = (goalId: string, amount: number) => {
    update({
      savings: state.savings.map((g) =>
        g.id === goalId
          ? {
              ...g,
              saved: g.saved + amount,
              status:
                g.saved + amount >= g.target ? "achieved" : g.status,
            }
          : g,
      ),
    });
  };

  return {
    ready,
    state,
    update,
    totalIncome,
    totalSpending,
    availableBalance,
    spendingByCategory,
    addExpense,
    addIncome,
    addContribution,
  };
}
