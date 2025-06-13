export const redocDeps = ['redoc'];

export function RedocUI(outputFile: string) {
	return `
"use client";

import { RedocStandalone } from "redoc";

export default async function ApiDocsPage() {
  return (
    <section>
      <RedocStandalone specUrl="/${outputFile}" />
    </section>
  );
}
`;
}
