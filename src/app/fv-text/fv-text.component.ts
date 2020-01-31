import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-fv-text',
  templateUrl: './fv-text.component.html',
  styleUrls: ['./fv-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FvTextComponent),
      multi: true
    }
  ]
})
export class FvTextComponent implements ControlValueAccessor, OnInit {
  @Input() gimmeTheCtrlName: string;
  @Input() placeholderTxt: string;
  set value(val) {
    // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
    this.val = val;
    this.onChange(val);
    this.onTouch(val);
  }
  val = ''; // this is the updated value that the class accesses
  onChange: any = () => {};
  onTouch: any = () => {};
  // this method sets the value programmatically
  writeValue(value: any) {
    this.value = value;
  }
  // upon UI element value changes, this method gets triggered
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  // upon touching the element, this method gets triggered
  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }
  ngOnInit() {}
}
