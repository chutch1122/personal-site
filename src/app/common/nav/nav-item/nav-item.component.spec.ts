import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavItemComponent } from './nav-item.component';
import { By } from '@angular/platform-browser';

describe('NavItemComponent', () => {
  let component: NavItemComponent;
  let fixture: ComponentFixture<NavItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavItemComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(NavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default values', () => {
    expect(component.current()).toBe(false);
    expect(component.icon()).toBe('');
  });

  it('should display the icon if icon is provided', () => {
    fixture.componentRef.setInput('icon', 'home');
    fixture.detectChanges();
    const iconElement = fixture.debugElement.query(By.css('[data-test="nav-item-icon"]'));
    expect(iconElement).toBeTruthy();
    expect(iconElement.nativeElement.textContent).toContain('home');
  });

  it('should not display the icon if icon is not provided', () => {
    fixture.componentRef.setInput('icon', '');
    fixture.detectChanges();
    const iconElement = fixture.debugElement.query(By.css('[data-test="nav-item-icon"]'));
    expect(iconElement).toBeFalsy();
  });

  it('should apply the correct classes when current is true', () => {
    fixture.componentRef.setInput('current', true);
    fixture.detectChanges();
    const navItemElement = fixture.debugElement.query(By.css('[data-test="nav-item"]'));
    expect(navItemElement.classes['bg-gray-800']).toBeTrue();
    expect(navItemElement.classes['text-white']).toBeTrue();
  });

  it('should apply the correct classes when current is false', () => {
    fixture.componentRef.setInput('current', false);
    fixture.detectChanges();
    const navItemElement = fixture.debugElement.query(By.css('[data-test="nav-item"]'));
    expect(navItemElement.classes['text-gray-400']).toBeTrue();
    expect(navItemElement.classes['hover:bg-gray-800']).toBeTrue();
    expect(navItemElement.classes['hover:text-white']).toBeTrue();
  });

});
