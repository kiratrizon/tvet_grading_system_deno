function updateClock() {
            let now = new Date();
            let options = { timeZone: 'Asia/Manila', hour12: true };
            
            let hours = now.toLocaleString('en-US', { hour: 'numeric', ...options });
            let minutes = now.toLocaleString('en-US', { minute: '2-digit', ...options });
            let seconds = now.toLocaleString('en-US', { second: '2-digit', ...options });
            let ampm = now.toLocaleString('en-US', { hour: 'numeric', hour12: true, ...options }).includes('AM') ? 'AM' : 'PM';
            
            let timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
            let dateString = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Asia/Manila' });

            document.getElementById('time').textContent = timeString;
            document.getElementById('date').textContent = dateString;
        }

        setInterval(updateClock, 1000);
        updateClock();