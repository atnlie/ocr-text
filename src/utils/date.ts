
export default function getJakartaDate() {
    return new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Jakarta'
        });
}
