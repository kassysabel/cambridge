import { async, inject, TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { UserService } from "./users.service";
import { User } from "@models/user.model";
import { MockArticlesService, MockLoggedInUser, MockLoggedInUserArticle, MockUsers } from "./mock/users.mock.service";

describe("UserService", () => {
  let service: UserService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    httpMock = TestBed.inject(HttpTestingController);
  });

  it("can load instance", (inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  })));

  describe("listAllUsers", () => {
    it("return list of all articles", (inject([UserService], (service: UserService) => {
        service.getAllUsers().subscribe((user) => {
          expect(user).toContain(MockUsers[0]);
          expect(user).toContain(MockUsers[1]);
        });  
    })))
  });

  describe("getUser", () => {
    it("return user loggedIn", (inject([UserService], (service: UserService) => {
        service.getUsers("1").subscribe((user) => {
          expect(user).toEqual(MockLoggedInUser)
        });
    })));
  });

  describe("getArticlesOfUser", () => {
    it("return user's articles", (inject([UserService], (service: UserService) => {
        service.getArticlesOfUser("1").subscribe((userArticles) => {
          expect(userArticles).toContain(MockLoggedInUserArticle);
        });
    })));
  });
});


