import { Store } from '@tanstack/store'
import { getState } from './game/store/game'

type SetupState = {
  activePlayerID: string | undefined
}

const setupStore = new Store<SetupState>({
  activePlayerID: getState().players[0].ID,
})

function setActivePlayer(ID: string) {
  setupStore.setState((s) => ({
    ...s,
    activePlayerID: ID,
  }))
}

export { setupStore, setActivePlayer }
