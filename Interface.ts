interface karthik {
    StartTrail: () => string
    getcoupon(coupnnumner: number): number
}

const karthika: karthik = {
    StartTrail: () => { return "asdjasdjk" },
    getcoupon(coupnnumner = 2) {
        return 2
    },
}

interface kowshik extends karthik {
    role :"brother" | "mom" | "dad "| "relative"
}

//inheritance in typescripte - interface
const memeber :kowshik= {
    StartTrail: () => { return "asdjasdjk" },
    getcoupon(coupnnumner = 2) {
        return 2
    },
    role:"brother"
}