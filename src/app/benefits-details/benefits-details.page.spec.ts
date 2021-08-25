import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BenefitsDetailsPage } from './benefits-details.page';

describe('BenefitsDetailsPage', () => {
  let component: BenefitsDetailsPage;
  let fixture: ComponentFixture<BenefitsDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenefitsDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BenefitsDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
