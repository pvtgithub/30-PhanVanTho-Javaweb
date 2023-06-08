import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceDate'
})
export class ReplaceDatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const daysOfWeek = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
    const date = new Date(value);
    const dayOfWeek = daysOfWeek[date.getDay()];
    const formattedDate = date.toLocaleDateString('vi-VN');
    return `${dayOfWeek}, ${formattedDate}`;
  }

}
