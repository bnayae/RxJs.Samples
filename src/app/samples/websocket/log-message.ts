import { Component, Injectable } from '@angular/core';
import { LogLevel } from '.'; 

export class LogMessage {
    level:LogLevel;
    path:string;
    message:string;
}