import { Component, Pipe, OnInit, PipeTransform } from '@angular/core';


@Pipe({
    name: 'enum'
})
export class EnumPipe
    implements PipeTransform
{
    transform(index: number, args: string): string
    {        
        var items = args.split(',');
        return items[index % items.length];
    }
}