# My First FE Deploy

โปรเจคง่ายๆสำหรับทดลอง deploy React + Vite ขึ้น GitHub Pages

## เริ่มใช้งาน

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy ขึ้น GitHub Pages

### วิธีที่ 1: ใช้ GitHub Actions (แนะนำ)

1. สร้าง repo ใหม่บน GitHub ชื่อ `my-first-fe-deploy`
2. Push โค้ดขึ้น repo
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git branch -M main
   git remote add origin https://github.com/<USERNAME>/my-first-fe-deploy.git
   git push -u origin main
   ```
3. ไปที่ **Settings → Pages** ของ repo แล้วตั้ง **Source** เป็น **GitHub Actions**
4. รอ workflow ใน tab **Actions** รันเสร็จ แล้วเข้าที่ `https://<USERNAME>.github.io/my-first-fe-deploy/`

### วิธีที่ 2: ใช้ gh-pages manual

```bash
npm run build
npm run deploy
```

## หมายเหตุ

- ถ้าชื่อ repo ไม่ใช่ `my-first-fe-deploy` ให้แก้ `base` ใน [vite.config.js](vite.config.js) ให้ตรงกับชื่อ repo
