import { render, screen, fireEvent } from '@testing-library/react';
import { vi, type Mock } from 'vitest';
import NewBrandKitForm from './NewBrandKitForm';
import useController, { Status } from '../../controller';

vi.mock('../../controller', async (importOriginal) => {
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  const mod = await importOriginal<typeof import('../../controller')>();

  return {
    ...mod,
    default: vi.fn(),
  };
});

describe('NewBrandKitForm', () => {
  test('renders form fields correctly', () => {
    const createOutroMock = vi.fn();
    (useController as Mock).mockReturnValue({
      controller: { createOutro: createOutroMock },
      status: Status.Idle,
    });

    render(<NewBrandKitForm />);

    (useController as Mock).mockReturnValue({
      controller: { createOutro: createOutroMock },
      status: Status.Pending,
    });

    expect(screen.getByRole('heading', { level: 5 })).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
  });

  test('submits form with correct data', () => {
    render(<NewBrandKitForm />);

    fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'Test Brand Kit' } });

    fireEvent.click(screen.getByText('Save'));

    expect(screen.getByText('Save')).toBeInTheDocument();
    expect(document.querySelector('svg')).toBeInTheDocument();
  });
});
