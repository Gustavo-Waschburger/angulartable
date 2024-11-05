import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusemloginComponent } from './menusemlogin.component';

describe('MenusemloginComponent', () => {
  let component: MenusemloginComponent;
  let fixture: ComponentFixture<MenusemloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenusemloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenusemloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
