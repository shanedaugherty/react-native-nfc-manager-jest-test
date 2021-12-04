import {Ndef} from 'react-native-nfc-manager'

export const createTextPayload = (text: string) => {
    return Ndef.text.encodePayload(text)
}