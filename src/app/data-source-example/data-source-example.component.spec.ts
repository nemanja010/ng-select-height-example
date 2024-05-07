import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSourceExampleComponent } from './data-source-example.component';

describe('DataSourceExampleComponent', () => {
  let component: DataSourceExampleComponent;
  let fixture: ComponentFixture<DataSourceExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataSourceExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataSourceExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
