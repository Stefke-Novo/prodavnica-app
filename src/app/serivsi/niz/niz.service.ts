import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NizService {

  constructor() { }
  public prodavnice=new Array(
    {
      "naziv":"Lidl supermarket",
      "lokacija":"Lokacija 1",
      "slika":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABTVBMVEX/8AAGUH66JB//8gD/+AD/9gAASH/h3CAAUoIAT3//9ADy6QAKU3u8Ix26Ih//+QC+IhoAS4C2ACAARILAIRcARoB0j1vCwUKGlWDCIBNefmQ0Y3UAQYO5GB+3AB8lYm/UexbGZh2yACLp4hKImFwAPYRig2D45wqsACWmskKoKixvPFWWMDv64gSvJSCtKChYQmEqSnJ/TUp9OE2dLTSGNUU3SG2uGSW6Qh/CUhyzMCK1UiTVrRzpzQ6/YyDQlhvFfCD42wbANx3FSxuTMT1LRmppP1tVQ2KLNEPPhhjZoxnlyBG5TSDgtxPMjR7DcyDBaB/rvA3GUxvCQBxsPVh4OVDevBe4ZiTGkSDOpR/bkhTz0QjDgiHgyhjfnhKoHCfPcBjIyi4kW3mToVVPdG3Jxz1lgmXV0S8/bG+frUbRWQ2msEeKnVKJZEgAN4YUZsp5AAAU3klEQVR4nO2d61/bRrOAZa1EZBFdEHJSJ0hvME1EDTZQjHGIDTgBQsy1TeC0TXLOm0vT9DSn///Hs9LuyrqsZFmSb++v8ymxjbyPZ3Zm9jbLFP7ThZl0A0Yu/xDOvvxDmIsIUTKOLx8tIcJoHm+u7ZyuNzbqrKrqqirVN6rrRzs3J8dN9JGRtmF0hHbDmyc7jQ1W1SGWKkkSSwT+G76i6zpbb+y8Od4qjBBzNISwwc2To6pa1lUPF1UkG3Rjfe14VJT5E9pmubau23DxbF5MSS2XGzfHhRFA5kwIW/jytK7ryeF82mSPTrbyhsyTELZtc13SVTqADMXAYv+bTqmrjTf5ajI/Qqi9o3JYeQ6WqWmru3utp8tInrb2dlc1zTRt1jBkubFZyI8xJ0JB2NquB7UH4cyK3Hr2qtc+q1kWA0QOicgwllXrtHu/PWuxFZszCMmeNvNSZC6EgnC8HnAsEM5cPb9sdyxO4XheBLYwRJz/iSLPc4rVubjcX9XMAKUKFZkPYw6EQuGkXpZ8dIa2d917ryg2GhMvkBRydi6uWhU/paRLN3kYa2ZCobBW9/U+wzTOex2G48UBbD5OnmO6vX1W80Hq7M5WZsaMhJCP9fDZHe/6oqYMVh1Nmbxi3R6u+jSpqjtZ9ZiJENondAoevsp+Gygp6FxKkeNvryqml7G8nY0xC6HwcsPDZ2itgxrHp8fDInJW+1wzPIzsWhbG9ITCVqPvX2z13YrZ8RyBnfLsquIxVn3jOD1iWkKhsOPje2Vlsc6QiIp1UO8bq1RupHY5KQmFzbra56sfWFyOeI4Azurt9RlVKa2ppiIUCuuuAqH+RsDnMPJMz6NHvZpOjWkIhU1V7fNdMiPhQ4z8Qd3tj1L5Jg3i8IRC4cj1oLJ2VRsZn8PIWe/6fjWVGocmFJpuD5TN1pkySj6HUenua64apc2hEYclFG7cHmgYbWWYzCytiMrtnmuq5aNhHc5whNDF6K6BXlvcGPhs4Zl3rhrVYS11KEJha4NYqFG5HWkH9AvgzvYM11JfDoU4DKHwklgoVCD8Yccpoviu4lrq2jCIQxAKa7qrwPYYFYgEcLe7RI366UgIhR0XsNUdVw/0Cm89MwliYxSExMfAGCiOw4WGBXC/EEtVNxL7m8SEDZUA9sZuoa4otyRsSPWkiEkJqxjQ2D1TJsUHhevWDeJSEyImIhQKJEoYe9Z4fWhQxHnSGSWpmQgxmQ4JoPnUmkwX7AsAV9pQiIkIXcBrMLEu2Efk3uEhVTJDTUJI+qB2OPI8O5Eov2hDICYgJF5Uu5xEFKQJ9ytBTOBRBxIK633AqdCgLVwbB0ZpI7MO3UxGu5xklAiK0sZaVKsZCd1cdHpMFIlrqPrRADuNJxReYkDzcHpMFAn3C46L+oDZm1hCYatMwsQ0mSgS5R2Oi+X4mY14HW6g8aDxdAriYEi4Q6xFNTbyxxESNwpTtSkEZID4zEjgUGMIhRvUCeXdiadqdAHzeGpDXY9RYjSh0Czj4dLZZJPtaBG7deRQyyfRiDE6rKNOqPWmz8sQ4W8rA7tiJKFwhDvh1XQFQr8oOGbEdMUoQmETdUKjleeiWf7CYW+jb0cpMVKHSINypTudXoYIsHZxV4yy0whCEii09jTbqC38GUrCI+2UTihsIj9qXE87ILTTSzPWTiN0iPyoXGGmuhM6AsQ9PMxoJicUdrCN3k5rJPSK+B7baZWqRCrh1uzYqC3ETukpOI1QaCAbNaYyHQ0LYLCd1hPqUHiJVGhOvR8lIr7Xop0NTYdozCS3pjdbC4ryX3iUsZWEUDjRccI93bHeK2AFORv1NKxEig7xqPdqdlTYn9Moh5UYIsRzT3KlNhtuBgkcKiIlhuelwjpEwxFjyubWBgn/K85sQkoMEroqnIFsxifKRoQSQzpE+ZpxMFsqhEpso4ihBpUYICSOtD4jwb4vJD1Vd4R4wllVYV+J5VgdCsdl1AtnToX93E0N7LYJEK4jFb7KpkLf6ZGxCXanwaGwn3ALTc5kUiHgOavbrTlnf8YqQFx1lFj27wrzEQrbzrjQ2E+fzgCu+9sL1jDY14/e5rSxPbFw75zsVFqPJsShQrtN/fOLzCPNOXsny4a2XBvvABp0cHa6FUWI19Lk9BOI/FvJc4jAMH8aL6Ky7yhR9/kaHyGaBDYO0rZL7PpPoMnaeBHFWw35mijCQjlbzg2Y5wbrE9nojrMvAgatY/hGGB5CPM1t7KcNFdwjkw2I8fNYx2DY16jesb6XEAVDs53SskAteBbU9lpvxxk0xPfhkOi1UjT0raSN1vx/h1QIlfhorPmf8j/ITJs0QuxJjdRL9srPRphQfj7WYRh/iczUs3vBQ3jqeFLzIq1ZKWbYSFnZHGuKK3aQN63SCFG4Tz9JCoAWBoQdcbzeFKD02zPp1idsIiM9T2ukU0HIcIco6Penv11CPH1h9FLH6GmwUhj0HXfnmVbsE6JYoXVSe3eO6mlej3fCB1hogMFSCFFOupe+QdMQLWAr0LJ3P61xCdHekizLTVMQ8Rl7IQp1RHf/CSHEU1Bm+m4IH/4q5GvGnLUx/Y64EyJE4wrzfYafHIDXwcxbHvvMOZiv2N8sVUNWWnWi4Wqmn1ysyT5EedwDRFvw1LAUInRUKPejIYgX+tPF7vN+yJAN820AcMBDg08d8uNIcER0U1NMiDexGZekSWA+XiJ+QBG8Mk0yi/Hv0OmTQQ/lfAU1BrVhnorI/+p3NYQQOxp35CQu3o2ThR8i+ivgangm6lU3OBMFVmKfeffux4dP/lrp10Thvy/GfvxfVL+PU1PX1RBCtPui4sZ7/nExThajCO3ZRAXNJoZ+YbAS+0xbFhYXH3wgpzr470uxn31IJQQrzi4pqREgdDYnyLKbYvGPC3FSiiZkcP+hfXexGPtURxYef17hMeFc3AeLdEKGazmugGxbIITO2r3ccv8mEyFj+5wwYzJCyFj4wGcgVPBmPj8hWhc1nrmuNCMh3zUehY4QJSUsFJd+59MTcq+Qq2n6CJtoHrG/XsH/7dg69cnx/RADytqjsKdZiHpmCPGD6PbDqDZE9EOG7zlZjY4n9xGhcBwcOol3H0K5S3l80X7j4/04Qr4rwa4QQgQr9p8+TEBYKN6FoYD/9NH+KlobnNZ9phOKbdMbLjDhZiBYQF1DUe4thJ9eWlG4+GUXsSs5dqIFDRU4D/1XEi2WnsAOw9sf/30x/O7c93YbIgYJJFxs+wjXHCsNbqHhqYR3BqSa/ZnvsKHaP10iwsLjP1BbxPs0wu9iskE4RHQIT32EKBxqgTw5FSHRYBRiQsKFB3xqQhQQ132EaJ5t1cpOKNYkT/YdMlQ64cLcQujFxRWQkhDtrSHzbZjQmcKQd7MTBocXYS1SCBfuffuyEPyq0ic+HSEDnqKQ7yNEKU1wCmN4Qji4CAwRQ4gUT7N0h+NWvga+q/iVS0nILaNpYR8hTmlARkKxFgQMGapYC7v/JfhIcT5gqMWCY6ZpCK/R+MlHWHfC4dNADBiWUKyxlOk2nxbFWvkhlZDhfwigLDreNANhwUuIkrblQIQZkpCmwQAi/IgeQQjmC/43UN6UhvCKQqjmQBgF6DFUkXluROmQ4b7630CuZioIUe/1hwmqFkXrtcFGEga/rfRtGEJPo8g8ho9Qz0AoMvYr0Rp0EYH1An4kmjAwlJj7PjkhED2tohKm16Go3L/7pwjVEwfoGKqIJhuj+iH8Nj9hch0C7s5nTxqeKyHg/vi6BF3CIEAbkbE1yBr/+zWqH34OWOmfyQgBt3LvcemBh5DWD6VUhIBf+bK4AIfDXC04FxwWw/kNjJ9FWsS3fSkTGKst3k/kS3nmU7EE09gBhGniIeCZbyX7A6UfmMGAMKGwv+IFPaexO/KHUDxMEPFF7v7HxWLBT0iLhzinGSZrE8FfpZLT2Lm/kgA6v+FrACh5qU0IuED/dAbBAwhhJ3m45PwZjdCX01SHzUtF/veHi7hJxR9VrKJBgC/gF1AJeR7cK/lfXPg8KC+FDuYLaYOPEOWlepaxBVD++LzkNtQhNIzBPfE1jCw0wtKn+58eloIv/hk/trA7yaLbPi+hSBtbOCtPcsLxocitfFnyvGMTGsv8vykLpEETZejjw9JiKfhisRQ/PhTBn3OeP/IQ4s3CgfHhUGP8+W9zvtchIXSRIr8ci2i8QL9f0jH+k9gxvtLvJCFCyzfpjQlvEGEnwTxN8dvdwA9e/NHpYECMQzRe48oMSedpiEOjES58ebDkf4qPsGJ/YWCehizM9Akj59oKcyGD+vGF46LiEJ0+CPjkc233ODsURMy1FUIzAl7CLm2u7Ti4xi0+eAIlnGDRZOH/sA8GIm07BjZRCDhvP/MJbRI2KMWPMFSIf9mN+Jxw4solFC/QfOkbLyHZLvSbS8j/vQAl2SR86Qd31RHQEZGJgpW5uWQPLS7Zo1/+u8XEbfAQUue83XWLpCszAULXuOlaRGFimHWLDwnWLSIJqesWBSdt8xwbTUlI1SJxMonXnoqJ1p6iCMna05aPEE+2sUnXDyMJYY8MIrpeNBlhcelrsvXDKMKI9UOyBpyZMKRF4zmD3x5IWCwulJa+3vesAacgxBuXQmvAb5AzdTeX8n/PJZbH/qU2vxZdDSJPEyvFj18/3emXf+W/W0rchkWXUHxLX8fHy2v9vRh3hpDApgiAxrpYg94STAOes8L47scAK0O0YcW1vp4vWPT30wT36Q/ayxK7D8bVYt9Ekz008Jw0bcBLwG41F5dwI4c9UR7EF3LARMcmCj6kR8DcfW1ke2ku+9BgWHRG9M9rYwcEoGKDhPe14TVS8yKPjWi4I/r74JgEnwzqbxJ2CdHp0VzqXuFuOAkNuucRwvtLyaGn4FRNCgHgxeQAGX45ao8wLtlSyby1Hs1sT8ZEncEhcjSUfd5oEJxpk7Aj4k92ZdEJaRAOndCRkiMKIY75GU7IYuEh4qQA3Q1RJ2FCMrxgrcwdkfvJlCZUTNKtO0A7M4N3emc4BOwK/9Ok6tiRc0+eU6QeQnzAMo94MbFKhOTs2jaNkGz1Xh33IfM8RcHHZJtUQhwvzBzMdFJCjNRb9MtLeJKfmU5IsCf11TehneWewbIfSEjxj/JxBCEx08xBf1KCw73n4FqQEHlT+XxWzVRZDh9WD9TFQL/ALFVq8wroagPqYpAZt9kq1dYXfDDPnWWj6RAXuJ5NXwNENKzQN2MIsa+ZtWJtSPAkW7ACZoBwc1ZLfdmhAs11q4ECmMFaX8jXzGLA4C+S1PpyS+7VZ63kHuyFLXrRvVDNvVlVIon2erBecqhuIiqGJe9Odyn2sOCJ4ECooOkQ13AxZ6zqnltxL3S/dbh+KVbibLlTknOHVUirQYtLXb+bpcSGO8A1aMPV9Sl1hG9wHeH0FTLGLqScg0S5rIRWC7qOlPhsdpSoXOHrWCiF52n1vNFYn9VyWaUZh4idCgKklIKm12SvSjPlbABo4VvYKDB0wmPsbA5nI2IQN6NT7wmm342A7u+YkaLlYgcNfKV68rsRClso7Mv1abyrKyCAb+GrZkLBPoYQbz6ZCTsldz9Q3UwkIXE2M3CHB7FRt8JAQkJyiYe8O+XF54FFru2KunE98r4nfLWjcT5tFx/6BRdlpRXUH0BYEPAFq+ZUz9koPTSkkKJsNO7eNexP2crF9CLyt/jG1fCgKQEhuYxlilNwsYbPsUTfSRZ//+Epvv+wTi9XNHEBAN9/GHEP0kBCXP/Lvl1uKuelAI+9TEwnHES4hXoia1xP47qwew9pRDKThJCk4Kx5OH1jReWA3CVLTbiTEbrZ2xTGDA7HiYFXHscTei6tnrK5N869troRTzCI0A388nRdR6pcuLerDwAYSAhzcBdxerTIXZC71aWB18cPJHQvdpanx1BdE2Wl2OucExIKWyxBvAyV05mIwGRUThInEuvQRYRBYwriIuAuCWBMNjoUoRfxeuLZDRAPSaVbPf5S9SEIPYhGa8J3dItgn5ziHHBr/FCEXsR6Z5L+hq/tkeM4SfpgckKIuIGCBvQ37cmN+pVbUmdLkhICJiUsCIWqi/hq7BcdIQHcQYVEiQRhYkhCKA2cwLHm+ZgvAULCW24XVOuFpIDDEBZIjsoalYuxWyrgzupuF2wkBxyKUFjDgyloqVdgvGoUxUtioWz5aIhGD0UIx4vEpUKfejtGNQKus0fKaEv0BZh8CKFLJf7GVmOomPWohGfcNAb+xEmdaCpCaP5HrqUa9QtlHE4VKLd77p0EenWILpiG0N76JkmuGs87I8/FgdLd7yswbtowL0LbUolPZQ3t0Bptd+SsS809VKwOa6HpCO3dGmVXjcbuARjZgAPwXK/evzQD+tDhAVMRFoRmX42yUTlgRqJH+Mu16/2LCFQ2anVpBITwp7xRJZfRrB/kb6uAY9p7fT5JP02jwNSEdm9slL2Ml1auflXk5g88+mP1eooemI3QXrmpu6Zq2+r1GZ9ThwS80jmseC6tUaU1IS1gBkLbVFnVbQX0q62exWXftClyVvtc8/KpaQ00K6FtqjtlD6NsVq4vQBZIIHLc7dWu92osqbyeeKCUP6HNeKp6GQ1z9erCUvgUu1SAfTHG7eGqafj4Gtn4MhM6jJKHEUJqxrNe175QZTjlMbXePqv5roxSdciXETA7oc24reuSD9LQ9q56HUXh+YEmC4DIc0rn4qpVMf03Yqnlo+x8uRDaPufNRtnL6Nirtnp+2e5YisLZoL7KJc7/RJGHbFbn4nJ/VQvQwfhX387iX/qSC6HNeLwu6X5IVoaYFbn17FWvfVazLFR/jUMXK1hWrdPu/fasxULVhW4zU9XGZj58uRFCRmFrbaOsBiAdTAPqU1vd3Ws9XUbytLW3u6ppps0WKpkpqeX69lYO5oklN8KCA7ldpUASVJsViX0fFPVDEG9jJ4/e15c8CQu2tW7dVCVdpTZ/kKi6Wt1uFnLly52w4Ghy87Re1qN0GaE7vawenUDjzBevMArCgg0JKXeqko05kNOBq56OhM6WkRDaYre3ebLdqLO6rqthUklSVfgOW2/svGkW8jZNj4yM0BFHLc2XJ9un69W6Wu6LXq82TrffvGxu2Z8ZGZ0toyVEIhCJeWV0Mg7Cyco/hLMv/xDOvvw/ICSF3au20FcAAAAASUVORK5CYII="
    },
    {
      "naziv":"Lidl market",
      "lokacija":"Lokacija 1",
      "slika":"data:image/png;base64,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"
    },
    {
      "naziv":"Lidl minimarket",
      "lokacija":"Lokacija 1",
      "slika":"data:image/png;base64,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"
    },
    {
      "naziv":"Dis market",
      "lokacija":"Lokacija4",
      "slika":"data:image/jpeg;base64,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"
    }
  );
  public prodavnice1= new Array();
  public izbaciElementIzListe(parametar:Object){
    this.prodavnice1.push(this.prodavnice.filter(prodavnica=>prodavnica==parametar)[0]);
    this.prodavnice=this.prodavnice.filter(prodavnica=>prodavnica!==parametar);
    console.log(this.prodavnice1);
  }
  public ubaciElementUListu(parametar:Object){
    this.prodavnice.push(this.prodavnice1.filter(prodavnica=>prodavnica==parametar)[0]);
    this.prodavnice1=this.prodavnice1.filter(prodavnica=>prodavnica!==parametar);
    console.log(this.prodavnice);
  }
}