export class Filter {
  id: number;
  name: string;
  checked: boolean;

  constructor(id: number, name: string, checked: boolean) {
    this.name = name;
    this.checked = checked;
  }
}
