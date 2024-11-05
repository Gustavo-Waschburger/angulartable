import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarBasic } from './toolbar.component';

describe('ToolbarComponent', () => {
  let component: ToolbarBasic;
  let fixture: ComponentFixture<ToolbarBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
