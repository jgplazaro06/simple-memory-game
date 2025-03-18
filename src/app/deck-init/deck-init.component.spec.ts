import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckInitComponent } from './deck-init.component';

describe('DeckInitComponent', () => {
  let component: DeckInitComponent;
  let fixture: ComponentFixture<DeckInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeckInitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeckInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
