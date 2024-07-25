import { ImageUrl } from "../../assets/media/ImageUrl";
import { Button, Image } from "react-bootstrap";
import RequireText from "../../assets/i18n/TextDefiner";
import { useEffect } from "react";
//顶部滚动文本
function ScrollBrand() {

    const text = {
        brand1: "headnav.brand.brand1",
        brand2: "headnav.brand.brand2",
        brand3: "headnav.brand.brand3",
    }
    function ScrollItem({ textkey }) {
        return (
            <div className="x-full in-block wrap text-center pad-scroll"  >
                {RequireText(textkey)}
            </div>
        )
    }
    return (
        <div className="nowrap wordBreak overflow-hidden font1 bgdark pad-content"  >
            <div className="x-scroll-loop-3p">
                <ScrollItem textkey={text.brand1}></ScrollItem>
                <ScrollItem textkey={text.brand2}></ScrollItem>
                <ScrollItem textkey={text.brand3}></ScrollItem>
                <ScrollItem textkey={text.brand1}></ScrollItem>


            </div>
        </div>

    )
}
//中央链接
function NavContainer() {

    const navitems = {
        navitem1: {
            title: RequireText("headnav.navitem.navitem1.title"),
            content: {
                name: "",
                url: ""
            }
        },
        navitem2: {
            title: RequireText("headnav.navitem.navitem2.title"),
            content: {
                name: "",
                url: ""
            }
        },
        navitem3: {
            title: RequireText("headnav.navitem.navitem3.title"),
            content: {
                name: "",
                url: ""
            }
        },

    }
    function NavItem({ title }) {
        return (
            <div className="font2">
                {title}
            </div>
        )
    }
    return (
        <div className="d-all-center gap-5 R-hidden">
            <NavItem title={navitems.navitem1.title}></NavItem>
            <NavItem title={navitems.navitem2.title}></NavItem>
            <NavItem title={navitems.navitem3.title}></NavItem>
        </div>
    )

}

export default function HeadNav() {
    //监听是否sticky
    const observer = new IntersectionObserver(
        (e) => {
            
            console.log(e[0].intersectionRatio);
            e[0].target.classList.toggle("sticking",e[0].intersectionRatio<1);          
        }
        ,
        {
            root: null,
            threshold: [1]
        }
    )
    
    function sticking() {
        const el = document.querySelector(".sticky-top")
        // 监听

        observer.observe(el)
        console.log(el)

    }

    //useeffect执行与清理
    useEffect(() => {
        sticking();
        return (() => observer.disconnect())
    })

    return (
        <>
          
            <div className="d-x-center x-full sticky-top" style={{}}>
                <ScrollBrand></ScrollBrand>
                <div className="d-x-between d-y-center x-full pad-page max-width pad-y-10" >
                    <Image className="size-100" src={ImageUrl.brandIcon}></Image>
                    <NavContainer></NavContainer>
                    <div className=" R-hidden">
                        <div><Button className="button-light">Get Started</Button></div>
                    </div>
                    <div className="R-show" ><i className="bi bi-text-left font-size-icon" ></i></div>

                </div>

            </div>

        </>
    )
}