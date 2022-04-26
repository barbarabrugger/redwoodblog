// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  locations: [
    { id: 42, name: 'St. Gallen', zip: 9000, canton: 'SG' },
    { id: 43, name: 'Zürich', zip: 8000, canton: 'ZH' },
    { id: 44, name: 'Bern', zip: 3000, canton: 'BE' },
  ],
})

export const missingPlz = {
  locations: [{ id: 42, name: 'St. Gallen', canton: 'SG' }],
}
