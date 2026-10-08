import { chromium } from 'playwright'
import { spawn } from 'node:child_process'
const [V, out, fps] = [process.argv[2], process.argv[3], 30]
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' })
const p = await b.newPage({ viewport: { width: 1920, height: 1080 } })
await p.goto('file://' + V + '/intro.html'); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(1000)
const dur = await p.evaluate(() => window.DURATION)
const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(fps), '-c:v', 'mjpeg', '-i', '-',
  '-c:v', 'libx264', '-preset', 'medium', '-crf', '20', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', out], { stdio: ['pipe', 'inherit', 'inherit'] })
const n = Math.round(dur * fps)
for (let i = 0; i < n; i++) {
  await p.evaluate((t) => setTime(t), i / fps)
  const buf = await p.screenshot({ type: 'jpeg', quality: 92 })
  if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once('drain', r))
  if (i % 300 === 0) console.log('frame', i, '/', n)
}
ff.stdin.end(); await new Promise((r) => ff.on('close', r)); await b.close(); console.log('done')
