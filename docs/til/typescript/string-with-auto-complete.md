# Accept any string, but suggest some specific values on autocomplete

```
type StringWithAutocomplete<T> = T | (string & Record<never, never>);
```
  
Refs: 
- https://twitter.com/diegohaz/status/1524257274012876801?s=20&t=UQdzmDdhQ5x03NTEJO4Gww
- https://www.typescriptlang.org/play?ssl=1&ssc=70&pln=1&pc=1#code/C4TwDgpgBAysBOBLAdgcwOqOACwIIFdgB7AYyIFswAbCYCAHgBUA+KAXikagB8oAKAM4IUqKADIoAJQhl4AE3rIIANwjwANFCWr4zAJQBuAFBHQkKADF4+LO1jC0mHAWJlKNOvQBEAQzDUILx4oLwAjH2QInyDeL1R4P0DmYyMyZCEoPwCALktrWw5ffxovYzSM8MjI3KsbYDswqMjS1KJ0+oB3Hzp4cggqNpr8+sKunr6B5BbW9qgAM2GhuobSoA
