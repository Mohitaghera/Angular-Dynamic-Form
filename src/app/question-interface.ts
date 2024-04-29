export class QuestionInterface {
  value: any;
  type!: string;
  label!: string;
  isVisible!: boolean;
  isRequired!: boolean;
  errorMessage!: string;
  hint!: string;
  controlType!: string;
  key!: string;
  options!: { key: string; value: string }[];

  constructor(
    options: {
      value?: any;
      type?: string;
      label?: string;
      isVisible?: boolean;
      isRequired?: boolean;
      errorMessage?: string;
      hint?: string;
      controlType?: string;
      key?: string;
      options?: { key: string; value: string }[];
    } = {}
  ) {
    this.value = options.value;
    this.type = options.type || '';
    this.label = options.label || '';
    this.isVisible = options.isVisible || false;
    this.isRequired = options.isRequired || false;
    this.errorMessage = options.errorMessage || '';
    this.hint = options.hint || '';
    this.controlType = options.controlType || '';
    this.key = options.key || '';
    this.options = options.options || [];
  }
}
