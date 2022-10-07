export interface LoginActions {
  setLogin: (value: boolean | ((prevVar: boolean) => boolean)) => void
}
