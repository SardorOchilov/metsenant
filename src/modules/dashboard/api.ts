import { http, RequestFn } from "services";

import { IApi } from "./types";

export const Students: RequestFn<Partial<IApi.Students.Request>, IApi.Students.Response> = 
params => http.get("/students/", { params });

export const Sponsors: RequestFn<IApi.Sponsors.Request, IApi.Sponsors.Response> = params => http.get("/sponsors/", { params });

export const StudentsSingle: RequestFn<Partial<IApi.Students.Request>, IApi.Students.Response> =  id  => http.get(`/students/:2`);

export const Universities: RequestFn<IApi.Universities.Request, IApi.Universities.Response> = params => http.get("/universities/");
