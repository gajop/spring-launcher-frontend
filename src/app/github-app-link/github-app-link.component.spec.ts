import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubAppLinkComponent } from './github-app-link.component';

describe('GithubAppLinkComponent', () => {
  let component: GithubAppLinkComponent;
  let fixture: ComponentFixture<GithubAppLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubAppLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubAppLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
