(this.webpackJsonpthinkey=this.webpackJsonpthinkey||[]).push([[0],{52:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(12),r=n.n(a),c=n(53),s=n.n(c),i=n(13),u=n(33),A=n(17),o=n(0),l=n.n(o),b=n(1),d=n(28),j=n(45),f=n(35),p=(n(67),n(74),n(73),{apiKey:"AIzaSyDC69WPbw-YypjfK7NAbiZFDMjUjOiuGMU",authDomain:"thinkey-project.firebaseapp.com",projectId:"thinkey-project",storageBucket:"thinkey-project.appspot.com",messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/thinkey",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyDC69WPbw-YypjfK7NAbiZFDMjUjOiuGMU",REACT_APP_APP_ID:"1:503658872394:web:74c85bbd03255ff7a2f0b3",REACT_APP_AUTH_DOMAIN:"thinkey-project.firebaseapp.com",REACT_APP_MEASUREMENT_ID:"G-D2YVPRSC2L",REACT_APP_MESSAGING_SENDER_ID:"503658872394",REACT_APP_PROJECT_ID:"thinkey-project",REACT_APP_STORAGE_BUCKET:"thinkey-project.appspot.com"}).REACT_MESSAGING_SENDER_ID,appId:"1:503658872394:web:74c85bbd03255ff7a2f0b3",measurementId:"G-D2YVPRSC2L"});f.a.initializeApp(p);var h=f.a,O=f.a.auth(),m=f.a.firestore(),y=f.a.storage(),x=f.a.firestore.FieldValue.serverTimestamp,v=n(6),S=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(i.a)(c,2),u=s[0],A=s[1],o=Object(a.useState)(!0),d=Object(i.a)(o,2),j=d[0],f=d[1],p=Object(a.useState)(""),h=Object(i.a)(p,2),m=h[0],y=h[1],x=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?r(a):"password"===n&&A(a)},S=function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!j){e.next=8;break}return e.next=5,O.createUserWithEmailAndPassword(n,u);case 5:e.sent,e.next=11;break;case 8:return e.next=10,O.signInWithEmailAndPassword(n,u);case 10:e.sent;case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0),y(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("form",{onSubmit:S,className:"container",children:[Object(v.jsx)("input",{name:"email",type:"text",placeholder:"Email",required:!0,value:n,onChange:x,className:"authInput"}),Object(v.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,onChange:x,className:"authInput"}),Object(v.jsx)("input",{type:"submit",value:j?"Create Account":"Log In",className:"authInput authSubmit"}),m&&Object(v.jsx)("span",{className:"authError",children:m})]}),Object(v.jsx)("span",{onClick:function(){return f((function(e){return!e}))},className:"authSwitch",children:j?"Sign In":"Create Account"})]})},N="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtsAAANoCAMAAAAmh9b1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABUUExURQAAAACv/wCn/wWq/wSn/wOp/wOq/wWo/wSr/wSr/wOq/wSq/wSq/wSq/wOq/wSq/wSq/wer/xSv/xew/yO0/ye2/zK6/43Y/5Ta/5/e/+T2/////6CKntwAAAAQdFJOUwAQIDBAUGBwf4+fr7/P3+8FUYRsAAAACXBIWXMAABcRAAAXEQHKJvM/AAAVsUlEQVR4Xu3d21YrvXIG0GVsjAEfct45vP97xsZi4wUGbLfcXVLNeZVc5A8svqFRqpLUfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAxs4f54nH5tHp+eXldrzeb7Xa7+6f9/7LdrF9fX16eV6vl42L+UP6vIKrZ/PHp6Xkf5d2/XGu7fn1ZLReL8l+CGA6Z3kf6+kSfs30Lefkvw0TeQl0p05/tI75QrDCB2f1SfWoj4Yxnv1iv1vdP9anX5+W8/H+H+5g9rkZYrM97fX6clR8DaprNn142JWaT2b2ubDOpabZ4GrkK+Yl8U8li7Or6EvLNQLPHl3i5fvf6pIPCTWaL1eT19W+2z5ZvrhR6wf7b61L7hEs9TNfou816pTrhd/P4lcg565XpDj9pNNhHm2erN+fNWg72keKEr2bLxmrs77w+ld8I9maLZroil3hdlt+L7B7ar0U+2ym9+TN77C7YR2uLd27z555qkc8s3mnNFp1sH7+n8k5pttqWAPTt2UQ+mUXXxcjflCaJ7IuR8mdPwr4yidkyWbIPNtLdvyxl9lfP5V+APs0SldlfKbz7lTvZB9LdJ8k+kO7+SPY76e6LZJ+S7n5I9md6Jn2YrST7K+lu32yZtZ/9G9OcxmWbrl/DrLJli3X5M3LWxrsPjbKF/N2LlkmDJPsyNpXNUWhfaqvsbsr8tfzhuMBGYdIM5ci1FCaNWOhoX22nMGnA7KX8ubiKjkl0s6Vy5FYeEgxtrjsygFFOXPaQQ9lTBqWlPZylOyKLdh2W7nAs2rVYumOxaNdk6Q5k7ixrVYbwYTxZtGvT6w5h5lzUHVi6A3B65D52j+UfmInYRN6PLeWkbCLvSV0yIQej7syWciKz5/IX4G7UJZNwb2wM6pIJLNQj49AvGZn+yHjUJaMyrxnTxicqxzM3rxnVztHAsTyqR8bmGvw4tP4msCr/+NyRUnsa6/Lvz908mLJPRKf7zuwip7NblD8C92AXOSk7yvt5Kv/GTMSO8k689Dc9O8q70CCJQLjvQLRjMICvToMkCgP4yuYaJGHoBVblsHYowl2Pe5HBaHTX4t2ocFwSrsPEJiBTnBpW5V+TUIR7ONEOyjXKoVxECOul/Im4jSMkgZm/DyHaoQn37UQ7OOG+lWiHJ9y3Ee0GCPctdEia8Fr+XFxOX7sR+tzXEu1mCPd1nCFpiINT1xDtpjjyejnntRsj3Jdyy6Y5buJcxt3IBgn3JUS7RW6/X2DmsYYm7Tzz+puZN4gbtS1/Qb7h9ah2OVryM+ejGibcPzGzaZrp+/eW5d+IRpnhfEf3r3na3Oc9iHbztLnP0v3rwdbz3Gfo/nVBs+QrLZJOeJLnMy2SbjyWPylHWiQdsZ88NduUfxY6sLOf/OAUSV/sJz+41N4Z+8l3j+VfhG7YTx6ZR/bHfPKNeWSP3FQ48O5fl7wTaB7ZLeddFdvdyl5yK7b7lb3k1tnuWO6SW2e7a5m73DPFdtcyv8fjGEnn8h4s0f7rXtZn57X/EsjZCNT+yyBnI1D7L4WMb025RZZEvud43CLLYlf+4nmoSNLIdglHRZJIrl5JhB7Jf/xnAuV3nVauXkmEiuR//i+B/yq/7LQy9UpCVCSyPZ5EVUmIqY1sjydPVRLjHIlsjyjLuZIg50hke0RZTrsG+RaZbI8px2nXKHdtZHtUGe7ghBm2y/aoMozewwzbZXtc/Y/e41xIkO2Rdd/kjnNFUrZH1vt2MtCjDbI9tr63k5FObcv22PreTkY6tS3bo1uVGPQo1M122R5fx9PJUE9ty/b4+n0hcFF+wxhkewLd9gFjPUgi2xPYlCj0JtijrbI9hT77gNFebZDtKfTZB4z2sqVsT6LHz+DMtuWXi0K2J9Hjwh3usR3ZnkZ/A5x4n0iQ7Wn0d70s3htpsj2R3g5yB3xHXran0tnCHW/Zlu3J9LVwR/z8h2xPpquFO+CyLdvT6Wnhjrhsy/aEOlq4Iy7bsj2hfhbukMu2bE+pm4U75LIt21PqZeEO+tV22Z5SJwt3zGVbtifVx8IddNmW7Un1caok6LIt29Pq4ThguHPb72R7Uj2c416W3yUc2Z5WB58JCftta9meVvsLd7DL7Sdke2LN35yM9SbJKdmeWOtvlczL7xGQbE+t8TZgkG+SnSPbU2t7fhN1bnMg25NreuGOOrc5kO3JPZeYtCjs3OZAtifXchswbgNwT7an13AbMM5Hyc6Q7em12wYM3ADck+0Amt1NRt5JynYIrbYBQ+8kZTuEVneToXeSsh1Do6cB4x4leSPbEWxLWNoSeycp20E0uZuMvZOU7SCa3E3G3knKdhAt7iaD7yRlO4oGZ5OhZ5IHsh1De9/Bjny69Ui2g2huNxnta5Jf/Vtl/13iNMi/l/9YLeV3Da25Fnf4kqS6f5R4DvKv5T+WSWst7ofycyci27dqrCiJX5JUJ9u3aqwoCT5vvwfZvlVbLe7o8/Z7kO2bNVWURJ+334Ns36ypO8FhHwG8I9m+WUtFScaSRLYHaKgoyViSyPYADT00n7BLIttDtFOUpCxJZHuIZoqShIObPdkeoJnxTcqSRLaHaKUomZWfNxnZHqKRoiT8jZv7kO0hGilK8h1vfSPbQzRy+yb6JeA7ke0h2ii4k5Yksj1ME1eCUw4l92R7kCbeKUlaksj2MC0UJTmHknuyPUwDXcCw32+/N9kepoEuYNIOoGwP1UAXMGu5LdsDxS+405bbsj3UokQorJxnAA9ke6DwFxTSltuyPVT4D/KFf+LybmR7qFnJUFB5y23ZHix4wZ233JbtwYIX3HnLbdkeLHiHO213W7aHi93hTlxuy/ZwoQvuxOW2bA8X+khJ4nJbtocLXXAnLrdle7jIBXfCL4F8kO3hAp/hznpV8o1sDxe44M56VfKNbA8X+NJk5q2kbFcQ+HN8mbeSsl1DCVI8mSc3sl3FvEQpnLTXgN/IdgVhN5Opt5KyXUPYzWTqraRs1xD27k3qraRs1xB1Mpl6KinbdQSdTKaeSsp2HUE3k5kPuO7Jdg1B75Xl3krKdhVBj7nm3krKdhVBN5N5nyZ5I9tVhHykJPfEXbYrCTl1T94mke06QjZKkrdJZLuOkI2Sl/LDZSXbVYRslCRvAcp2HSGvJyRvAcp2HRGbgLPys6Ul23UEbAJmbwHKdiUBH07LfelmT7brCNgEzN4ClO1KAjYBs7cAZbuSgE3A7C1A2a5kXQIVSPYWoGxXErAJKNslnoPIdsD3d5JfltyT7UrCNbjTt7dlu5ZwDe5F+cHyku1KliVSYaRvb8t2LeGGN7It25WEG96kH93Idi3hhjfpRzeyXUu4bK/LD5aXbFcS7nZC+tGNbNcSbjAp27JdS4lUGOXHSky2awk2mDRyl+1qgj2/Y+Qu29UEG7obuct2NY8lVEFkfzBtT7ZrCXagJP1NYNmuJ9iBEsdJZLuaYAdKcn9a8o1s1/JcQhXEc/mxEpPtWoJ9QNUxQNmuJthhKdmW7WqCZdsRV9muJtgLJbIt29UE+6i749uyXU2wbG/Kj5WYbNcS7HKC49uyXU2wywmyLdvVyHY0sl2LbEcj27XIdjSyXU0JVRC78lMlJtvVlFAFIduyXU8JVRCyLdv1lFAFIduyXU8JVRCyLdv1lFAFIduyXU8JVRCyLdv1lFAFIduyXU8JVRCyLdv1lFAFYS4p29WYuUcj27XIdjSyXUuwbLt3I9vVBLt3I9uyXU2wbLsLLNvVuOcejWzXEizb3ieR7WqCvb3jzTTZrka2o5HtWoK9B+iNYtmuJtgbxd6Wl+1qgr0t75sgsl1NsG+C+JaTbFcT7FtOvsEn29UE+wafb6fKdjXBvp3qm9eyXU2wb17Pyo+VmGzXMi+hCkK2ZbuahxKqKFyYlO1aSqTCcIBbtisJdnxbtmW7mmBHXB1yle1qgh0DdFhKtqsJdlTKYSnZribYUSkHSmS7mmBHpRwoke1qgo3c//x5KD9YXrJdSbhsG0zKdiXRxpIGk7JdSwlUIOmHN7JdR7ixpNd3ZLuScGNJwxvZriTc6MbwRrYrCTe60eCW7UqC3ZY8SH+rTLbrCNfe1uCW7Uritbc1uGW7jhKnULI3uGW7ioAtQE1A2a4i2COuR9mbgLJdRcAWoCagbFcRsAWoUSLbVQR7VKooP1xWsl1FxBZg+kaJbNcQsk2SvlEi2zWEbJOkb5TIdg0h2yTpGyWyXUPINkn6Rols1xBzK5n9RIlsV7ArUQon97Uy2a4gaJske6NEtisIupXMvpmU7QqCbiWzbyZlu4KAl26K1JtJ2a5gVpIUT+rNpGwPF3YrmXwzKdvDhd1KJt9MyvZwYbeSyTeTsj1c1Knkwbb8jBnJ9mBhp5IHL+WHzEi2Bwt6wPUo8zFX2R4s8FYyd8Et24PFndwcJJ7eyPZgcSc3B4mnN7I9VODJzUHiglu2hwpdbqee3sj2ULHL7cybSdkeKvLk5iBvwS3bAwUvtzMX3LI9UPByO/O3r2V7oODl9l7aDrdsD7OL3d0+SHukRLaHCX2Y5GhZftR0ZHuYVQlQYGm7gLI9zLwEKLKsZ7hle5DQZ7ffZb00KduDBPyM+1dZx+6yPUj8DuDeLGkXULaHaKADeJC0CyjbQzTQATxI2gWU7SEa6AAeJO0CyvYQ0c8AvsvZBZTtAcKfAXyX8yygbA/QSEmStSiR7QFifg34nJRFiWzfrpmSJOloUrZvF/5awoeURYls366dkiRnUSLbN9uW2DQhY1Ei2zdrqCTJWZTI9s1aKklSFiWyfauGuiQHT+XHTkS2b9XM4OYoYVEi27dq4TbZqXxFiWzfqLGSJONBV9m+UWMlScaiRLZv1Mrx1g/pbt/I9m0auXFzKt2VYNm+TROXgD/JtpuU7Zs0cgn4b9nm7rJ9k6bm7e+y7SZl+yZtzdvfJStKZPsWzTW3j5K1uGX7Fs01t4+SPTAl2zdocid5kGs3Kds3aOKFy3Ny7SZl+wZt7iQPNuU3SEG2r9foTvIg1W5Stq+3LEFpUaY2oGxfrdmd5EGm3aRsX63RBuBRpt2kbF+tvdOtpxKddJXtazV4uvVUok9gy/a12m0AHuVpA8r2lRpuAB7laQPK9pVabgAepWkDyvZ1ti03AI/SLNyyfZ2mG4BHsywLt2xfpem5zbssX7+R7at0sGznmd/I9jV2bc9t3iUZvMv2NZo9uP23JAu3bF+jtfctv5Nj8C7bV2h83P4hx8It21foZdlOsnDL9uW6WbaTLNyyfbl+lu0cC7dsX6yjZTvHwi3bF+tp2U6xcMv2pbpatlMs3LJ9oV1fy3aGhVu2L9Tkq8Q/6X/hlu3LdHKS5FT3xwFl+zJdHAD8W/fnuGX7Il2c2/6s9ws4sn2RDpftvc4Xbtm+RAe3JM/p/Kt8sn2JpxKG3vT9VolsX2BdotCdefkF+yTbF2j9KanvvZbfsEuy/bvOpu2nuh7gyPavupu2n+p5gCPbv+pu2n6q5wGObP+my7HNh477gLL9m177f+/W5ffsj2z/otv+37t+H5uX7V/02/971+1Bbtn+WdcbyaNut5Oy/aPON5JHvW4nZftHvW8kjzqdTsr2T7rfSB51Op2U7R90PZE89VR+4b7I9g/6vJFwTpeHXWX7e53eSDinyya3bH+v/9b2hx4/pSDb30rQ2j7RYZNbtr+TqCI5WJRfuyOy/Z3H8kfPor+qRLa/kasi2etv9C7b5yWrSA66q0pk+7xsFclBb1WJbJ+VriJ509kER7bPSViRHHQ2wZHtM3aZpjan+jpXIttn5DlH8llXlydl+6t1zorkYLYr/wY9kO0v0pxsPaenRqBsf5Hjrs13OroZLNuf5Wz/feinESjbnyRt/33opxEo239L2/770M21d9n+W+5i+6iXa++y/ZeX8ufNrZOSW7ZPbbIX20edlNyyfUKxXfTR5ZbtE4rtd110uWX7Q/bO9qkeDpbI9j8ptk/0cMPsH/9bQRfZ3j2UPysHfX96MpddxltkP+n8g9iZ2Ed+1u33FLKxj/yq3688pWIfecasy9dds0l/+O+8h55u4SSV+qbNTzp8JDAZLZJvaZY0Tovke5olTdMi+Umn3zDL4cU+8kc6gc3S/fuFTmCrRPtXXb3Hk4ju3wUcm2qR7t9FtLnbI9oXEu7mLMufjt+Y4TTGzOZyfX7xvVtmNtfo8cPB3RLt65i+N0O0ryXcjXg2s7macDdBtG8h3A1wPuo2wh2eaN/KocDgXkX7Zlbu0KzaQwh3YKI9jHCHpUMylHAHJdrDGb+HJNo1rMq/JoEYtNch3OGsyp+GoZznDsZ57XrcxIlk55ZNTcIdh7uRlc097RCEaFfnUZ4YNj7UVN/MyakAvB51Hx7CnNxatO/EiHJihpH3422HKe20te/JY4HT0SC5s7l2yUQ2Hmq9N+2Saaz1/kZgRzkBu8hx2FGOzS5yNAbw47KLHJEB/JiM2cel6B6NUnts7iuMw2HtCeh0j0FXexqed7g7Z6Omohl4X1p/E1KX3JN6ZFr6JXfjub+p6Zfch/5IAOY49+BoVAy2lLXtntQjQdhS1mUTGYktZUWG7LHMt+UPw0AO/cVj6a5C5y8iS/dwG4t2UJbugSzacVm6h7Box6bXfSs97fDmXg28yVpPuwFLN4Wv5jRrK1xauJI9ZDsM4a+hHGnLUsfkQvaQ7fFVykvsHB5p0VzZ/SvlSKuMcn62NqxpmLL7ewrt1hlUnifZPZDur3Yrye7CzKbyb7sXN327oWVySnOkL9Jd7CS7P9K9J9mdSp9uye7YQ+Z0714ku29ZO4K7ld5I/54SzipNarJYJjvevZbsRBZ5Cm8byHQecpzv3q0kO6On7ksTxUheXXe89fyy63XxtmSz31f294zg7tmSzdFjT49R7SzZnJr1UpusNUb4Yt7+wHIr2HxjsWo43opsftZovPcrtiKbXy1WjdXeG6UIF5s9rUtuotvZPHK1x+fwD3nvXh9VItxkEXj5tmAz1OMqXr53+wrbgk0NkfK9X68Xck1NEfJ9qEPkmnt4WD5PFfDd5nkp19zX49gB38f6SawZy8NytR5hgLl9FWsmsdgn/D4zzN1Gqpnew+Ny9VJpFd+9hXrxINVEcsj4IeQ3jDP3id5HejmXaYJ7mC8el0+r55fX9Xq92W53u4+87//n3Xa72axfX1+e93l+XEg0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPDZnz//D5j3ZP+2Qd1hAAAAAElFTkSuQmCC",k=function(){var e=function(){var e=Object(b.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new h.auth.GoogleAuthProvider:"github"===n&&(a=new h.auth.GithubAuthProvider),e.next=4,O.signInWithPopup(a);case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"authContainer",children:[Object(v.jsx)("img",{src:N,width:"45",height:"50",style:{marginBottom:30}}),Object(v.jsx)(S,{}),Object(v.jsxs)("div",{className:"authBtns",children:[Object(v.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google",Object(v.jsx)(d.a,{icon:j.b,style:{marginLeft:10,color:"#ff0000"}})]}),Object(v.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github",Object(v.jsx)(d.a,{icon:j.a,style:{marginLeft:10,color:"#000000"}})]})]})]})},g=n(39),U=n(29),w=function(e){var t=e.thinkeyObj,n=e.isOwner,r=Object(a.useState)(!1),c=Object(i.a)(r,2),s=c[0],u=c[1],A=Object(a.useState)(t.text),o=Object(i.a)(A,2),j=o[0],f=o[1],p=function(){var e=Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=7;break}return e.next=4,m.doc("thinkey/".concat(t.id)).delete();case 4:if(""===t.attachmentUrl){e.next=7;break}return e.next=7,y.refFromURL(t.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){return u((function(e){return!e}))},O=function(){var e=Object(b.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,m.doc("thinkey/".concat(t.id)).update({text:j});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)("div",{className:"thinkey",children:s?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("form",{onSubmit:O,className:"container thinkeyEdit",children:[Object(v.jsx)("input",{onChange:function(e){var t=e.target.value;f(t)},value:j,required:!0,placeholder:"Edit your thinkey",autoFocus:!0,className:"formInput"}),Object(v.jsx)("input",{type:"submit",value:"Update Thinkey",className:"formBtn"})]}),Object(v.jsx)("button",{onClick:h,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(v.jsxs)("div",{children:[Object(v.jsx)("h4",{children:t.text}),Object(v.jsx)("h6",{style:{marginTop:20,fontSize:10},children:t.displayName}),t.attachmentUrl&&Object(v.jsx)("img",{src:t.attachmentUrl,width:"50px",height:"50px"}),n&&Object(v.jsxs)("div",{className:"thinkey__actions",children:[Object(v.jsx)("span",{onClick:p,children:Object(v.jsx)(d.a,{icon:U.e})}),Object(v.jsx)("span",{onClick:h,children:Object(v.jsx)(d.a,{icon:U.a})})]})]})})},Z=n(75),L=function(e){var t=e.userObj,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],s=r[1],u=Object(a.useState)(""),A=Object(i.a)(u,2),o=A[0],j=A[1],f=function(){var e=Object(b.a)(l.a.mark((function e(n){var a,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""!==c){e.next=3;break}return e.abrupt("return");case 3:if(a="",""===o){e.next=12;break}return r=y.ref().child("".concat(t.uid,"/").concat(Object(Z.a)())),e.next=8,r.putString(o,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:a=e.sent;case 12:return e.next=14,m.collection("thinkey").add({text:c,createdAt:Date.now(),creatorId:t.uid,displayName:t.displayName,attachmentUrl:a});case 14:s(""),j("");case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("form",{onSubmit:f,className:"factoryForm",children:[Object(v.jsxs)("div",{className:"factoryInput__container",children:[Object(v.jsx)("input",{className:"factoryInput__input",value:c,onChange:function(e){e.preventDefault();var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(v.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(v.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(v.jsx)("span",{children:"Add photos"}),Object(v.jsx)(d.a,{icon:U.c})]}),Object(v.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;j(t)},Boolean(t)&&n.readAsDataURL(t)},style:{opacity:0}}),o&&Object(v.jsxs)("div",{className:"factoryForm__attachment",children:[Object(v.jsx)("img",{src:o,style:{backgroundImage:o}}),Object(v.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return j("")},children:[Object(v.jsx)("span",{children:"Remove"}),Object(v.jsx)(d.a,{icon:U.d})]})]})]})})},X=function(e){var t=e.userObj,n=Object(a.useState)([]),r=Object(i.a)(n,2),c=r[0],s=r[1];return Object(a.useEffect)((function(){m.collection("thinkey").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(g.a)({id:e.id},e.data())}));s(t)}))}),[]),console.log("currentUser",O.currentUser),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(L,{userObj:t}),Object(v.jsx)("div",{style:{marginTop:30},children:c.map((function(e){return Object(v.jsx)(w,{thinkeyObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},I=function(e){var t=e.userObj,n=e.refreshUser,r=Object(A.f)(),c=Object(a.useState)(t.displayName),s=Object(i.a)(c,2),u=s[0],o=s[1],d=function(){var e=Object(b.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),t.displayName===u){e.next=5;break}return e.next=4,t.updateProfile({displayName:u});case 4:n();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("form",{onSubmit:d,className:"profileForm",children:[Object(v.jsx)("input",{onChange:function(e){var t=e.target.value;o(t)},type:"text",placeholder:"Display name",value:u,autoFocus:!0,className:"formInput"}),Object(v.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(v.jsx)("span",{className:"cancelBtn logOut",onClick:function(){O.signOut(),r.push("/")},children:"Log Out"})]})},P=function(e){var t=e.userObj;return Object(v.jsx)("nav",{children:Object(v.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(v.jsx)("li",{style:{marginRight:30},children:Object(v.jsx)(u.b,{to:"/",className:"profileInfo",children:Object(v.jsx)("img",{src:N,width:"45",height:"50"})})}),Object(v.jsx)("li",{style:{marginRight:30},children:Object(v.jsxs)(u.b,{to:"/photos",className:"profileInfo",children:[Object(v.jsx)(d.a,{icon:U.b,color:"#04aaff",size:"2x"}),Object(v.jsx)("span",{style:{marginTop:10},children:"\uc0ac\uc9c4\ucca9"})]})}),Object(v.jsx)("li",{children:Object(v.jsxs)(u.b,{to:"/profile",className:"profileInfo",children:[Object(v.jsx)(d.a,{icon:U.f,color:"#04AAFF",size:"2x"}),Object(v.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName):""})]})})]})})},R=(n(52),function(e){var t=e.userObj,n=Object(a.useState)(null),r=Object(i.a)(n,2),c=r[0],s=r[1],u=Object(a.useState)(null),A=Object(i.a)(u,2),o=A[0],d=A[1],j=Object(a.useState)("\uc774\ubbf8\uc9c0 \ud30c\uc77c\uc744 \uc5c5\ub85c\ub4dc \ud574\uc8fc\uc138\uc694."),f=Object(i.a)(j,2),p=f[0],h=f[1],O=Object(a.useState)([]),S=Object(i.a)(O,2),N=S[0],k=S[1];Object(a.useEffect)((function(){y.ref("".concat(t.uid,"/"));m.collection("albums").orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(g.a)(Object(g.a)({},e.data()),{},{id:e.id}))})),k(t)}))}));var U=function(){var e=Object(b.a)(l.a.mark((function e(n){var a,r,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),console.log("file : ",c),null!==c){e.next=5;break}return alert("\uc0ac\uc9c4\uc744 \ub123\uc5b4\uc8fc\uc138\uc694!!"),e.abrupt("return");case 5:a={contentType:c.type},r=y.ref().child("".concat(t.uid,"/").concat(Object(Z.a)())).put(c,a),s=m.collection("albums"),i=x(),console.log("userid :",t.uid),console.log("imgSrc",o),r.then((function(e){return e.ref.getDownloadURL()})).then((function(e){console.log("url",e),alert("\uc0ac\uc9c4 \uc5c5\ub85c\ub4dc\uac00 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4!"),s.add({url:e,createdAt:i,userId:t.uid}),document.querySelector("#image").src=e}));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{children:[Object(v.jsxs)("form",{children:[Object(v.jsxs)("div",{className:"file-dropper",children:[p,Object(v.jsx)("input",{id:"image",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0];s(t),h(t.name);var n=new FileReader;n.readAsDataURL(t),n.onload=function(e){return d(e.target.result)},n.onloadend=function(e){var t=e.currentTarget.result;console.log("result : ",t)}}})]}),Object(v.jsx)("button",{type:"submit",onClick:U,className:"image-uploader",children:"Upload Image"})]}),Object(v.jsx)("div",{className:"photolines",children:N&&N.map((function(e){return Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:e.url})},e.id)}))})]})}),C=function(e){var t=e.isLoggedIn,n=e.userObj,a=e.refreshUser;return Object(v.jsxs)(u.a,{children:[t&&Object(v.jsx)(P,{userObj:n}),Object(v.jsx)(A.c,{children:t?Object(v.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(v.jsx)(A.a,{exact:!0,path:"/",children:Object(v.jsx)(X,{userObj:n})}),Object(v.jsx)(A.a,{exact:!0,path:"/photos",children:Object(v.jsx)(R,{userObj:n})}),Object(v.jsx)(A.a,{exact:!0,path:"/profile",children:Object(v.jsx)(I,{refreshUser:a,userObj:n})})]}):Object(v.jsx)(A.a,{exact:!0,path:"/",children:Object(v.jsx)(k,{})})})]})};var T=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),s=Object(i.a)(c,2),u=s[0],A=s[1];return Object(a.useEffect)((function(){O.onAuthStateChanged((function(e){A(!!e&&{uid:e.uid,displayName:e.displayName,updateProfile:function(t){return e.updateProfile(t)}}),r(!0)}))}),[]),Object(v.jsx)(v.Fragment,{children:n?Object(v.jsx)(C,{refreshUser:function(){var e=O.currentUser;A({uid:e.uid,displayName:e.displayName,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(u),userObj:u}):"Initializing..."})};s.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(T,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.96aead13.chunk.js.map