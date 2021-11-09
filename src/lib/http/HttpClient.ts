import axios from "axios";
import { BlueSnapConfig } from "../bluesnap/BlueSnapConfig";

export class HttpClient {
  private config: BlueSnapConfig;

  public constructor(config: BlueSnapConfig) {
    this.config = config;
  }

  public async get(path: string): Promise<any> {
    return axios({
      method: "GET",
      url: `${this.config.getBaseUrl()}${path}`,
      headers: this.getHeaders(),
    }).then((response) => response.data);
  }

  public async post(
    path: string,
    data?: Record<string, any> | null
  ): Promise<any> {
    return axios({
      method: "POST",
      url: `${this.config.getBaseUrl()}${path}`,
      headers: this.getHeaders(),
      data,
    }).then((response) => (response.status == 201 ? response : response.data));
  }

  public async put(
    path: string,
    data?: Record<string, any> | null
  ): Promise<any> {
    return axios({
      method: "PUT",
      url: `${this.config.getBaseUrl()}${path}`,
      headers: this.getHeaders(),
      data,
    }).then((response) => (response.status == 204 ? null : response.data));
  }

  private getHeaders(): Record<string, any> {
    const headers: Record<string, any> = {
      Authorization: this.getAuthorizationHeader(),
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    if (this.config.apiVersion) {
      headers["bluesnap-version"] = this.config.apiVersion;
    }

    return headers;
  }

  private getAuthorizationHeader(): string {
    return `Basic ${Buffer.from(
      `${this.config.username}:${this.config.password}`
    ).toString("base64")}`;
  }
}
