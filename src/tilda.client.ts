import {
  TildaProject,
  TildaPage,
  TildaPageData,
  TildaProjectData,
  TildaResponse,
  throwTildaError,
  TildaProjectExport,
  TildaPageExport,
} from '.';
import fetch from 'cross-fetch';

export class TildaClient {
  constructor(private readonly publicKey: string, private readonly secretKey: string) {}

  public async getProjectsList(): Promise<TildaProject[]> {
    const res: Response = await fetch(
      `https://api.tildacdn.info/v1/getprojectslist/?publickey=${this.publicKey}&secretkey=${this.secretKey}`,
    );

    if (res.ok) {
      return ((await res.json()) as TildaResponse<TildaProject[]>).result || [];
    } else {
      await throwTildaError(res);
    }
  }

  public async getProject(projectId: string): Promise<TildaProjectData> {
    const res: Response = await fetch(
      `https://api.tildacdn.info/v1/getproject/?publickey=${this.publicKey}&secretkey=${this.secretKey}&projectid=${projectId}`,
    );

    if (res.ok) {
      return ((await res.json()) as TildaResponse<TildaProjectData>).result;
    } else {
      await throwTildaError(res);
    }
  }

  public async getProjectExport(projectId: string): Promise<TildaProjectExport> {
    const res: Response = await fetch(
      `https://api.tildacdn.info/v1/getprojectexport/?publickey=${this.publicKey}&secretkey=${this.secretKey}&projectid=${projectId}`,
    );

    if (res.ok) {
      return ((await res.json()) as TildaResponse<TildaProjectExport>).result;
    } else {
      await throwTildaError(res);
    }
  }

  public async getPagesList(projectId: string): Promise<TildaPage[]> {
    const res: Response = await fetch(
      `https://api.tildacdn.info/v1/getpageslist/?publickey=${this.publicKey}&secretkey=${this.secretKey}&projectid=${projectId}`,
    );

    if (res.ok) {
      return ((await res.json()) as TildaResponse<TildaPage[]>).result || [];
    } else {
      await throwTildaError(res);
    }
  }

  public async getPage(pageId: string): Promise<TildaPageData> {
    const res: Response = await fetch(
      `https://api.tildacdn.info/v1/getpage/?publickey=${this.publicKey}&secretkey=${this.secretKey}&pageid=${pageId}`,
    );

    if (res.ok) {
      return ((await res.json()) as TildaResponse<TildaPageData>).result;
    } else {
      await throwTildaError(res);
    }
  }

  public async getPageFull(pageId: string): Promise<TildaPageData> {
    const res: Response = await fetch(
      `https://api.tildacdn.info/v1/getpagefull/?publickey=${this.publicKey}&secretkey=${this.secretKey}&pageid=${pageId}`,
    );

    if (res.ok) {
      return ((await res.json()) as TildaResponse<TildaPageData>).result;
    } else {
      await throwTildaError(res);
    }
  }

  public async getPageExport(pageId: string): Promise<TildaPageExport> {
    const res: Response = await fetch(
      `https://api.tildacdn.info/v1/getpageexport/?publickey=${this.publicKey}&secretkey=${this.secretKey}&pageid=${pageId}`,
    );

    if (res.ok) {
      return ((await res.json()) as TildaResponse<TildaPageExport>).result;
    } else {
      await throwTildaError(res);
    }
  }

  public async getPageFullExport(pageId: string): Promise<TildaPageExport> {
    const res: Response = await fetch(
      `https://api.tildacdn.info/v1/getpagefullexport/?publickey=${this.publicKey}&secretkey=${this.secretKey}&pageid=${pageId}`,
    );

    if (res.ok) {
      return ((await res.json()) as TildaResponse<TildaPageExport>).result;
    } else {
      await throwTildaError(res);
    }
  }
}
