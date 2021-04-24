import { addMatchImageSnapshotCommand } from "cypress-image-snapshot/command"

addMatchImageSnapshotCommand({
  failureTreshold: 0.0, //pixel perfect, no tolerance for ecen one pixel
  failurTresholdType: 'percent',
  customDiffConfig: { treshold: 0.0 },
  capture: 'viewport'
})

Cypress.Commands.add('setResolution', (size) => {
  if (Cypress._.isArray(size)) {
    cy.viewport(size[0], size[1])
  } else {
    cy.viewport(size)
  }
})
