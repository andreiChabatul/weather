export interface IApiGeohelper {
  success: boolean;
  language: string;
  result: IResultGeohelper[];
  pagination: IPaginationGeohelper;
}

export interface IPaginationGeohelper {
  currentPage: number;
  limit: number;
  totalCount: number;
  totalPageCount: number;
}

export interface IResultGeohelper {
  id: number;
  name: string;
  localityType: {
    code: string;
    name: string;
    localizedNamesShort: {
      es: string;
      kz: string;
      ro: string;
      ru: string;
      uk: string;
    };
    localizedNames: {
      en: string;
      es: string;
      kz: string;
      ro: string;
      ru: string;
      uk: string;
    };
  };
  codes: {
    soato: string;
  };
  regionId: number;
  externalIds: [];
  localizedNames: {
    en: string;
    ru: string;
  };
}
