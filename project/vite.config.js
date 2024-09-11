import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/App.jsx'),
        background: resolve(__dirname, 'src/background.js'),
        content: resolve(__dirname, 'src/contentScript.js')
      },
      output: {
        entryFileNames: '[name].js', // 해시 없이 고정된 파일 이름 사용
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      }
    },
    outDir: 'dist', // 빌드 결과가 저장될 디렉터리
    emptyOutDir: true, // 빌드 시 기존 파일 삭제
    minify: 'esbuild',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
});