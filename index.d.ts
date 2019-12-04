declare namespace datamask {
  export function string(value: string, mask_char?: string, percent?: number): string;

  export function domain(value: string, mask_char?: string, percent?: number): string;

  export function email(address: string, mask_char?: string, user_percent?: number, domain_percent?: number): string;
}

export = datamask;
