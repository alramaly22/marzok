document.getElementById('sendWhatsApp').addEventListener('click', function() {
    // بيانات العميل
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const activity = document.getElementById('activity').value;
    const workNature = document.getElementById('workNature').value;
    const goal = document.getElementById('goal').value;
    const availability = document.getElementById('availability').value;
    const injuries = document.getElementById('injuries').value || "لا يوجد";
    const budget = document.getElementById('budget').value;
    const socialStatus = document.getElementById('socialStatus').value;
    const goalTime = document.getElementById('goalTime').value;
    const obstacles = document.getElementById('obstacles').value;

    // قياس مستوى العميل - تمارين الحركة بوزن الجسم
    const pushups = document.getElementById('pushups').value;
    const pullups = document.getElementById('pullups').value;
    const abs = document.getElementById('abs').value;

    // قياس مستوى العميل - تمارين الثبات بوزن الجسم
    const plank = document.getElementById('plank').value;
    const staticPushup = document.getElementById('staticPushup').value;
    const singleLeg = document.getElementById('singleLeg').value;

    // قياس مستوى العميل - تمارين الحركة بأوزان حرة
    const benchPress = document.getElementById('benchPress').value;
    const squat = document.getElementById('squat').value;
    const deadlift = document.getElementById('deadlift').value;
    const shoulderPress = document.getElementById('shoulderPress').value;
    const bicepCurl = document.getElementById('bicepCurl').value;

    // إعداد الرسالة
    const message = `
        🌟 بيانات العميل 🌟
        - اسم العميل: ${name}
        - عمر العميل: ${age}
        - رقم الهاتف: ${phone}
        - الطول: ${height} سم
        - الوزن: ${weight} كجم
        - النشاط الممارس: ${activity}
        - طبيعة العمل: ${workNature}
        - الهدف من التدريب: ${goal}
        - الأيام الممكنة للتدريب + الوقت: ${availability}
        - الإصابات/العمليات: ${injuries}
        - الميزانية: ${budget} جنيه
        - الحالة الاجتماعية: ${socialStatus}
        - الوقت المحدد للهدف: ${goalTime}
        - العقبات: ${obstacles}

        🌟 قياس مستوى العميل 🌟
        تمارين الحركة بوزن الجسم:
        - الضغط: ${pushups} عدة
        - العقلة: ${pullups} عدة
        - البطن: ${abs} عدة

        تمارين الثبات بوزن الجسم:
        - البلانك: ${plank} دقيقة
        - الثبات في وضعية الضغط: ${staticPushup} دقيقة
        - الثبات على رجل واحدة: ${singleLeg} دقيقة

        تمارين الحركة بأوزان حرة:
        - بار مسطح: ${benchPress} كجم
        - السكوات: ${squat} كجم
        - الديدلفت: ${deadlift} كجم
        - بار كتف أمامي: ${shoulderPress} كجم
        - بار باي: ${bicepCurl} كجم
    `;

    // رقم الواتساب
    const phoneNumber = "+966592083324";

    // إنشاء رابط الواتساب
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // فتح الرابط
    window.open(whatsappURL, '_blank');
});
