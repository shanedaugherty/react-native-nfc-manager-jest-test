import {createTextPayload} from "./index";

describe('nfc manager', () => {
    it('should create text payloads', () => {
        const result = createTextPayload('heythere')

        expect(result).not.toBeNull()
    })
})
