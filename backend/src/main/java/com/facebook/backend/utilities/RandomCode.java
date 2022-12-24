package com.facebook.backend.utilities;

import java.util.ArrayList;
import java.util.List;

public class RandomCode {

    // VARIABLE
    private String code;
    private int digit;
    private int[] numbers = {0,1,2,3,4,5,6,7,8,9};

    public RandomCode(){
        this.code = "";
        this.digit = 5;
    }

    public RandomCode(int digit){
        this.code = "";
        this.digit = digit;
    }

    public String randomNumberProduce(){
        try{
            int random = 0;
            for(int i=0; i<this.digit; i++){
                random = (int)Math.ceil(Math.random()*9);
                this.code += (this.numbers[random] + "");
            }
            return this.code;
        }catch (IndexOutOfBoundsException e){
            throw e;
        }catch (Exception e){
            throw e;
        }
    }

}
