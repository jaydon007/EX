module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/testv/' : '/',
    devServer: {
        port:8090,
        open:true
    }
}