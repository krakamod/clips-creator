import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';

type CustomMatchers<R = unknown> = TestingLibraryMatchers<typeof expect, R>;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Vi {
    interface Assertion extends CustomMatchers {}
    interface AsymmetricMatchersContaining extends CustomMatchers {}
  }
}

class FormDataMock {
  data: Record<string, Array<string | Blob> | undefined> = {};

  append (name: string, value: string | Blob, fileName?: string): void {
    if (this.data[name] != null) {
      this.data[name]?.push(value);
    } else {
      this.data[name] = [value];
    }
  }

  delete (name: string): void {
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete this.data[name];
  }

  get (name: string): FormDataEntryValue | null {
    return (this.data[name]?.[0] as FormDataEntryValue) ?? null;
  }

  getAll (name: string): FormDataEntryValue[] {
    return (this.data[name] as FormDataEntryValue[]) ?? [];
  }

  has: (name: string) => boolean = vitest.fn();
  set: (name: string, value: string | Blob, fileName?: string) => void = vitest.fn();
  forEach: (callbackfn: (
    value: FormDataEntryValue,
    key: string,
    parent: FormData
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) => void, thisArg?: any) => void = vitest.fn();
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
// @ts-ignore
global.FormData = FormDataMock;

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
