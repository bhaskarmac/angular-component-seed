import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { MyComponent } from './my-component.component';

describe('MyComponent', () => {
  let componentFixture: ComponentFixture<MyComponent>;
  let componentInstance: MyComponent;

  // Asynchronous beforeEach.
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
      }).compileComponents().then(() => { /* Don't do anything */ });
    })
  );

  // Synchronous BeforeEach.
  beforeEach(() => {
    componentFixture = TestBed.createComponent(MyComponent);
    componentInstance = componentFixture.componentInstance;
  });
  
});
