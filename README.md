# Web Application Assets Management System RMUTI KKC (Frontend)

ปริญญานิพนธ์ครั้งนี้มีจุดประสงค์ เพื่อพัฒนาระบบการจัดการครุภัณฑ์ผ่านเว็บไซต์และระบบปฏิบัติการแอนดรอยด์ โดยส่วนประกอบหลักในระบบการทำงานของเว็บไซต์และแอปพลิเคชัน คือการจัดเก็บข้อมูล และตรวจสอบสถานะของครุภัณฑ์ จะทำการตรวจสอบสถานะของครุภัณฑ์ผ่านการสแกนคิวอาร์โค้ด ซึ่งเป็นบาร์โค้ด 2 มิติ ที่มีการอ่านข้อมูลอย่างรวดเร็ว จึงนำมาเป็นเครื่องมือในการช่วยให้เจ้าหน้าที่ผู้รับผิดชอบตรวจสอบครุภัณฑ์หรือผู้ใช้งานสามารถเข้าถึงข้อมูล สถานะ และตำแหน่งของครุภัณฑ์ได้อย่างง่ายและสะดวกมากขึ้น ทดแทนการจัดการและตรวจสอบครุภัณฑ์แบบการใช้เอกสาร และใช้ระยะเวลาในการตรวจสอบ ซึ่งระบบการจัดการครุภัณฑ์ผ่านเว็บไซต์และระบบปฏิบัติการ  แอนดรอยด์จะช่วยอำนวยความสะดวกในการตรวจสอบครุภัณฑ์ให้รวดเร็ว และมีประสิทธิภาพมากยิ่งขึ้น

จากการพัฒนาระบบตามขอบเขตและแผนการปฏิบัติงาน จะได้เว็บไซต์การจัดการข้อมูลครุภัณฑ์ที่มีการจัดเก็บรายละเอียดละข้อมูลของครุภัณฑ์ และนำข้อมูลของครุภัณฑ์มาสร้างเป็นคิวอาร์โค้ดหรือบาร์โค้ด 2 มิติ และได้แอปพลิเคชันที่ใช้งานบนระบบปฏิบัติการแอนดรอยด์ ที่สามารถดูรายละเอียดของครุภัณฑ์ ตาม หมวดหมู่ และสถานะของครุภัณฑ์ รวมไปถึงการอัปเดตสถานะ และเปลี่ยนสถานที่ตั้งของครุภัณฑ์ได้ผ่านการสแกนคิวอาร์โค้ด

# เครดิต
#### Watcharachai Samkhan
#### Isariya Roopkhan

พัฒนาโดยใช้ React
# คู่มือการติดตั้ง
- พัฒนาบน Node Version: **16.13.0**  
- React Version: **18.02.0**  

## ติดตั้ง Environment (Development)
#### Installing Node.js® and NPM on Windows
 > 1. Download Node.js Installer: [Download | Node.js (nodejs.org)](https://nodejs.org/en/download/)
 > 2. Install Node.js and NPM from Browser
 > 
	1) Once the installer finishes downloading, launch it. Open the  **downloads**  link in your browser and click the file. Or, browse to the location where you have saved the file and double-click it to launch.
	2) The system will ask if you want to run the software – click  **Run**.
	3) You will be welcomed to the Node.js Setup Wizard – click  **Next**.
	4) On the next screen, review the license agreement. Click  **Next**  if you agree to the terms and install the software.
	5) The installer will prompt you for the installation location. Leave the default location, unless you have a specific need to install it somewhere else – then click  **Next**.
	6) The wizard will let you select components to include or remove from the installation. Again, unless you have a specific need, accept the defaults by clicking  **Next**.
	7) Finally, click the  **Install**  button to run the installer. When it finishes, click  **Finish**.
>3. Verify Installation 
	>node -v
		npm -v
		-> Output 
			node: v16.10.0
			npm: v1.5.0	
>4. อ้างอิง [How to Install Node.js and NPM on Your Windows System](https://phoenixnap.com/kb/install-node-js-npm-on-windows)
  #### git clone โปรแกรม
 - โดยมีเครื่องมือต่างๆรองรับ เช่น **git desktop**, **sourcetree**
 >1. git clone <*repository*>
	 <*repository*> คือ URL ของ repository ที่เราต้องการจะ clone ตัวอย่างถ้าเราต้องการจะ Clone จาก github เราก็สามารถไป Copy URL จาก github ได้เลย
	 
##  เมื่อติดตั้ง Environment (Development) เสร็จ
- ทำการใช้ **git clone** โปรแกรม
	 >clone https://github.../.../BE_Qr.git
 - เปิดโฟลเดอร์ที่ได้ Clone โปรแกรม
- ให้ทำการติดตั้ง **Package** ของโปรแกรม
	 >  npm install หรือ yarn install
	 > ทดสอบ **Start** ระบบด้วย
	 > **npm start**
##  เมื่อต้องการ Build 
- ใช้คำสั่ง 
	 >**npm build** หรือ **yarn build**
##### ***ถ้าหากว่า path ของระบบ Backend เปลี่ยนจะส่งผลต่อระบบ  Frontend และ Application ไปด้วยในการรับส่งข้อมูล**	
## ถ้าหากว่า path ของระบบ Backend เปลี่ยน
- แก้ไขในไฟล์ **.env** ในตัวแปล <*APP_API_URL_PROD*>
	 > APP_API_URL_PROD = "new path"
	 > 
	 > ทำการ **npm start** อีกรอบ
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


#### *สงวนลิขสิทธิ์ ใช้ภายใน มหาวิทยาลัยเทคโนโลยี ราชมงคลอีสานวิทยาเขต ขอนแก่น.
