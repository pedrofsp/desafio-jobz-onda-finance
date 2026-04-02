import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useTransfer } from "./useTransfer";

// mock do Zustand
const addTransactionMock = vi.fn();

vi.mock("@/store/useTransactions", () => ({
  useTransactions: () => addTransactionMock,
}));

describe("useTransfer", () => {
  beforeEach(() => {
    addTransactionMock.mockClear();
  });

  it("should not submit if description or amount is empty", () => {
    const { result } = renderHook(() => useTransfer());

    act(() => {
      result.current.handleSubmit({
        preventDefault: vi.fn(),
      } as any);
    });

    expect(addTransactionMock).not.toHaveBeenCalled();
  });

  it("should call addTransaction with correct data", () => {
    const { result } = renderHook(() => useTransfer());

    act(() => {
      result.current.setDescription("Teste");
      result.current.setAmount(100);
      result.current.setType("entrada");
    });

    act(() => {
      result.current.handleSubmit({
        preventDefault: vi.fn(),
      } as any);
    });

    expect(addTransactionMock).toHaveBeenCalledTimes(1);

    const call = addTransactionMock.mock.calls[0][0];

    expect(call).toMatchObject({
      description: "Teste",
      type: "entrada",
      amount: 100,
    });

    expect(call.id).toBeDefined();
    expect(call.date).toBeDefined();
  });

  it("should reset state after submit", () => {
    const { result } = renderHook(() => useTransfer());

    act(() => {
      result.current.setDescription("Teste");
      result.current.setAmount(100);
      result.current.setType("saida");
      result.current.setOpen(true);
    });

    act(() => {
      result.current.handleSubmit({
        preventDefault: vi.fn(),
      } as any);
    });

    expect(result.current.description).toBe("");
    expect(result.current.amount).toBe(null);
    expect(result.current.type).toBe("entrada");
    expect(result.current.open).toBe(false);
  });
});
