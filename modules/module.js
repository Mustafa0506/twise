export const asideReload = (param) => {
    // header
    let aside_header = document.createElement('div')
    let aside_header_title = document.createElement('div')
    let aside_header_line = document.createElement('div')

    aside_header.classList.add('aside-header')
    aside_header_title.classList.add('aside-header_title')
    aside_header_title.innerHTML = 'valuet'
    aside_header_line.classList.add('aside-header_line')
    aside_header.append(aside_header_title, aside_header_line)


    // main 
    let aside_main = document.createElement('div')
    // overview
    let aside_main_overview = document.createElement('div')
    let asid_main_overview_img = document.createElement('img')
    let aside_main_overview_right = document.createElement('div')
    //wallets
    let aside_main_wallets = document.createElement('div')
    let aside_main_wallets_img = document.createElement('img')
    let aside_main_wallets_right = document.createElement('div')
    //wallets
    let aside_main_transictions = document.createElement('div')
    let aside_main_transictions_img = document.createElement('img')
    let aside_main_transictions_right = document.createElement('div')
    //exchange
    let aside_main_exchange = document.createElement('div')
    let aside_main_exchange_img = document.createElement('img')
    let aside_main_exchange_right = document.createElement('div')
    //market
    let aside_main_market = document.createElement('div')
    let aside_main_market_img = document.createElement('img')
    let aside_main_market_right = document.createElement('div')


    // aside_main
    aside_main.classList.add('aside-main')
    // overview
    aside_main_overview.classList.add('aside-main_overview')
    asid_main_overview_img.classList.add('aside-main_overview-img')
    asid_main_overview_img.src = "./assets/icons/overview.svg"
    aside_main_overview_right.classList.add('aside-main_overview-right')
    aside_main_overview_right.innerHTML = 'Overview'
    //wallets
    aside_main_wallets.classList.add('aside-main_wallets')
    aside_main_wallets_img.classList.add('aside-main_wallets-img')
    aside_main_wallets_img.src = "./assets/icons/wallets.svg"
    aside_main_wallets_right.classList.add('aside-main_wallets-right')
    aside_main_wallets_right.innerHTML = 'Wallets'
    //wallets
    aside_main_transictions.classList.add('aside-main_transictions')
    aside_main_transictions_img.classList.add('aside-main_transictions-img')
    aside_main_transictions_img.src = "./assets/icons/Transictions.svg"
    aside_main_transictions_right.classList.add('aside-main_transictions-right')
    aside_main_transictions_right.innerHTML = 'Transictions'
    //exchange
    aside_main_exchange.classList.add('aside-main_exchange')
    aside_main_exchange_img.classList.add('aside-main_exchange-img')
    aside_main_exchange_img.src = "./assets/icons/exchange.svg"
    aside_main_exchange_right.classList.add('aside-main_exchange-right')
    aside_main_exchange_right.innerHTML = 'Exchange'
    //market
    aside_main_market.classList.add('aside-main_market')
    aside_main_market_img.classList.add('aside-main_market-img')
    aside_main_market_img.src = "./assets/icons/market.svg"
    aside_main_market_right.classList.add('aside-main_market-right')
    aside_main_market_right.innerHTML = 'Market'

    aside_main_overview.append(asid_main_overview_img, aside_main_overview_right)
    aside_main_wallets.append(aside_main_wallets_img, aside_main_wallets_right)
    aside_main_transictions.append(aside_main_transictions_img, aside_main_transictions_right)
    aside_main_exchange.append(aside_main_exchange_img, aside_main_exchange_right)
    aside_main_market.append(aside_main_market_img, aside_main_market_right)
    aside_main.append(aside_main_overview, aside_main_wallets, aside_main_transictions, aside_main_exchange, aside_main_market)

    // foooter
    let aside_footer = document.createElement('div')
    // line
    let aside_footer_line = document.createElement('div')

    let aside_footer_prof = document.createElement('div')
    let aside_footer_prof_elips = document.createElement('div')
    let aside_footer_prof_text = document.createElement('div')

    let aside_footer_leave = document.createElement('div')
    let aside_footer_leave_img = document.createElement('img')
    let aside_footer_leave_text = document.createElement('div')

    aside_footer.classList.add('aside-footer')

    aside_footer_line.classList.add('aside-footer_line')

    aside_footer_prof.classList.add('aside-footer_prof')
    aside_footer_prof_elips.classList.add('aside-footer_prof-elips')
    aside_footer_prof_text.classList.add('aside-footer_prof-text')
    aside_footer_prof_text.innerHTML = 'Mike Jakson'

    aside_footer_leave.classList.add('aside-footer_leave')
    aside_footer_leave_img.src = "./assets/icons/log out.svg"
    aside_footer_leave_text.classList.add('aside-footer_leave-text')
    aside_footer_leave_text.innerHTML = 'Log out'



    aside_footer_prof.append(aside_footer_prof_elips, aside_footer_prof_text)
    aside_footer_leave.append(aside_footer_leave_img, aside_footer_leave_text)
    aside_footer.append(aside_footer_line, aside_footer_prof, aside_footer_leave)
    param.prepend(aside_header, aside_main, aside_footer)
}

export const headerReload = (param) => {
    let hed_top = document.createElement('div')
    let hed_input = document.createElement('input')
    let header_right = document.createElement('div')
    let hed_one_img = document.createElement('img')
    let hed_two_img = document.createElement('img')

    hed_top.classList.add('top')
    hed_input.classList.add('header_left')
    header_right.classList.add('header_right')
    hed_one_img.src = "./assets/icons/massage.svg"
    hed_two_img.src = "./assets/icons/call.svg"

    hed_top.append(hed_input, header_right)
    header_right.append(hed_one_img, hed_two_img)
    param.prepend(hed_top)
}


// export default asideReload
// export default headerReload

