package com.news.logic;

public interface PasswordEncoder {
    String encode();
    boolean match();
}
