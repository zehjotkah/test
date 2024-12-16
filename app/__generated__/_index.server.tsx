/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System }) => {
  const image_1: ResourceRequest = {
    id: "tM_VinrJXEYc9HY38ZhVF",
    name: "image",
    url: "https://payload.elecos.de/api/media/67601baf159e9d735582ea74",
    method: "get",
    headers: [
    ],
  }
  const _data = new Map<string, ResourceRequest>([
    ["image_1", image_1],
  ])
  const _action = new Map<string, ResourceRequest>([
  ])
  return { data: _data, action: _action }
}


      export const getPageMeta = ({
  system,
  resources,
}: {
  system: System;
  resources: Record<string, any>;
}): PageMeta => {
  return {
    title: "Home",
    description: undefined,
    excludePageFromSearch: undefined,
    language: undefined,
    socialImageAssetName: undefined,
    socialImageUrl: undefined,
    status: undefined,
    redirect: undefined,
    custom: [
    ],
  };
};


      type Params = Record<string, string | undefined>;
export const getRemixParams = ({ ...params }: Params): Params => {
  return params
}


      export const projectId = "a3550b18-de8d-4df8-90bc-626ac5455a7f";

      export const contactEmail = "hello@webstudio.is";
    