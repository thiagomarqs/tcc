package br.mackenzie.tcc.model;

public record SiteVerifyRequest(String secret, String response, String remoteip) {
}