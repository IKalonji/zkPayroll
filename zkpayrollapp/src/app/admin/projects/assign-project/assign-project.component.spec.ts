import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { AssignProjectComponent } from "./assign-project.component";
describe("BookprojectsComponent", () => {
  let component: AssignProjectComponent;
  let fixture: ComponentFixture<AssignProjectComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AssignProjectComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(AssignProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
