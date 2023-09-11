import { UserConfig, ConfigEnv, loadEnv } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()

  const env = loadEnv(mode, root)

  // The boolean type read by loadEnv is a string. This function can be converted to boolean type
  // const viteEnv = wrapperEnv(env)

  return {
    plugins: [react()],
  }
}
